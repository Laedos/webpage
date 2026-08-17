@Library('ci-shared-library') _

// No build/test tooling exists in this repo (plain HTML/CSS/JS, no package.json, no build step —
// see CLAUDE.md). Sonar's JS/HTML/CSS analyzers work against raw source with zero project config,
// so this pipeline is analysis-only: no install/lint/test/build stage, nothing for
// publishJUnitResults to report.
//
// enforceQualityGate() is deliberately NOT called: SonarQube's default "Sonar way" quality gate
// includes a "Coverage on New Code" condition, and there's no coverage concept for a static site
// with no test suite — any change touching a .js file would fail that condition every time,
// making the gate permanently red rather than meaningful. Findings still show up on the SonarQube
// dashboard for manual review; they just don't block the build here.
//
// Gitleaks + Trivy: same tools/shape as every sibling repo's pipeline, report-only for now
// (`|| true`) — matches RentEasy's rollout. Trivy is expected to find essentially nothing here
// (no package.json/dependency manifest exists in this repo to scan), kept anyway for pipeline-
// shape consistency across all sibling repos rather than carving out an exception.
pipeline {
    agent any
    options {
        timeout(time: 10, unit: 'MINUTES')
        timestamps()
        ansiColor('xterm')
    }
    environment {
        CACHE_KEY = "${env.JOB_NAME}".replaceAll(/[^a-zA-Z0-9_.-]/, '-')
    }
    stages {
        stage('Analyze') {
            steps {
                script {
                    runSonarAnalysis {
                        docker.image('sonarsource/sonar-scanner-cli:latest').inside('--network ci-internal') {
                            sh 'sonar-scanner -Dsonar.projectKey=webpage -Dsonar.projectName=webpage ' +
                               '-Dsonar.sources=. -Dsonar.exclusions=assets/**'
                        }
                    }
                }
            }
        }
        stage('Gitleaks: secret scan') {
            steps {
                script {
                    // --entrypoint="" — zricethezav/gitleaks:latest bakes in ENTRYPOINT ["gitleaks"],
                    // which turns .inside()'s keep-container-alive `cat` placeholder into `gitleaks
                    // cat` (an unknown subcommand) and kills the container before Jenkins can exec
                    // into it ("container is not running"). Same fix applied to Trivy below.
                    docker.image('zricethezav/gitleaks:latest').inside('--entrypoint=""') {
                        sh 'gitleaks detect --source=. -v --redact --report-format=json ' +
                           '--report-path=gitleaks-report.json || true'
                    }
                }
            }
        }
        stage('Dependency scan: Trivy') {
            steps {
                script {
                    docker.image('aquasec/trivy:latest').inside(
                        "--network ci-internal -v trivy-cache-${env.CACHE_KEY}:/root/.cache/trivy --entrypoint=\"\""
                    ) {
                        sh 'trivy fs --scanners vuln --severity HIGH,CRITICAL --format json ' +
                           '--output trivy-report.json . || true'
                    }
                }
            }
        }
    }
    post {
        always {
            archiveArtifacts artifacts: 'gitleaks-report.json,trivy-report.json', allowEmptyArchive: true
            cleanWorkspace()
        }
    }
}
