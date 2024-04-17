pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        
        stage('Deploy') {
            // Trigger the deployment stage only when changes are pushed to the repository
            when {
                changeset '.*'
            }
            steps {
                // Pull the latest changes from GitHub
                sh 'git pull origin master' // Replace 'master' with your branch name if different
                
                // Install dependencies and build the project (if necessary)
                sh 'npm install'
                
                // Execute any other deployment commands here
                // For example, restart your Node.js application if needed
                sh 'pm2 restart 0' // Replace 'app' with your application name
            }
        }
    }
}
