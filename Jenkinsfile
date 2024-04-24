pipeline {
    agent any
    
    stages {
        
        
        stage('Build') {
            steps {
                // If your project requires any build steps other than Maven,
                // you can add them here.
                // For example:
                sh 'npm install' 
                // sh 'make' (for projects using Makefile)
            }
        }
        
        
        
        stage('Deploy') {
            steps {
                // Execute deployment commands directly
                // Replace 'your-deployment-command' with your actual deployment command
                sh 'pm2 restart index'
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
