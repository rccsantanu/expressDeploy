pipeline {
    agent any
    
    stages {

        stage('Checkout') {
            steps {
                // Checkout the code from the Git repository
                git branch: 'master',  url: 'https://github.com/rccsantanu/expressDeploy.git'
            }
        }

        stage('Copy Project'){
            steps{
                sh 'cp -rf . /var/www/html/expressDeploy/'
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
        
        
        
        stage('Deploy') {
            steps {
                // Execute deployment commands directly
                // Replace 'your-deployment-command' with your actual deployment command
                //sh 'pm2 start index.js --name index'
                //sh 'pm2 restart index.js --name index'
                //sh 'pm2 restart 0 --name index'
                 //sh 'pm2 restart index.js --name index --watch'
                 //sh 'npx nodemon index.js'
                  sh 'npx nodemon --inspect=0.0.0.0:9229 index.js'
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
