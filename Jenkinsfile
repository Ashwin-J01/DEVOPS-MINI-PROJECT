pipeline {
    agent any

    stages {

        stage('Build') {
            steps {
                bat 'docker compose build'
            }
        }

        stage('Run') {
            steps {
                bat 'docker compose up -d'
            }
        }

        stage('Verify') {
            steps {
                bat 'docker ps'
            }
        }
    }
}
