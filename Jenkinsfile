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
pipeline {
    agent any
    options {
        timeout(time: 10, unit: 'MINUTES')
        timestamps()
        ansiColor('xterm')
    }
    stages {
        stage('Analyze') {
            steps {
                script {
                    runSonarAnalysis {
                        docker.image('sonarsource/sonar-scanner-cli:latest').inside('--network ci-internal') {
                            sh 'sonar-scanner -Dsonar.projectKey=Laedos_webpage -Dsonar.projectName=webpage ' +
                               '-Dsonar.sources=. -Dsonar.exclusions=assets/**'
                        }
                    }
                }
            }
        }
    }
    post {
        always {
            cleanWorkspace()
        }
    }
}
