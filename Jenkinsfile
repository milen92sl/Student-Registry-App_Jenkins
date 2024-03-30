User
pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/milen92sl/Student-Registry-App-Jenkins-Exercise'
            }
        }
        stage('Setup Node.js') {
            steps {
                sh 'nvm install'
            }
        }
        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Start Application') {
            steps {
                sh 'npm start'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
    }
}