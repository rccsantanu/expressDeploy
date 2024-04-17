pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }

        stage('Pull from GitHub') {
            steps {
                // Pull the latest changes from the GitHub repository
                sh 'git pull origin master' // Replace 'master' with your branch name if different
            }
        }
        
        stage('Deploy') {
            steps {
                // Copy files to your server
                // You can use SCP, SSH, or any other method to copy files to your server
                // Example:
                sh 'scp -r ./* ubuntu@3.90.216.246://var/www/html/expressDeploy'
            }
        }
        
    }
}