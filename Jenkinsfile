pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                // SCM will handle the checkout based on the provided repository URL and branch
                checkout scm
            }
        }
        
        stage('Build') {
            steps {
                // If your project requires any build steps other than Maven,
                // you can add them here.
                // For example:
                sh 'npm install' 
                // sh 'make' (for projects using Makefile)
            }
        }
        
        stage('Test') {
            steps {
                // Run tests (if applicable)
                // Modify this step according to your testing framework
                // For example:
                // sh 'pytest' (for Python projects)
                // sh 'rspec' (for Ruby projects)
            }
        }
        
        stage('Deploy') {
            steps {
                // Execute deployment commands directly
                // Replace 'your-deployment-command' with your actual deployment command
                sh 'pm2 restart index.js'
            }
        }
    }
    
    post {
        success {
            // If the pipeline runs successfully, notify users or perform additional actions
            echo 'Deployment successful!'
        }
        failure {
            // If the pipeline fails, notify users or perform cleanup actions
            echo 'Deployment failed!'
        }
    }
}
