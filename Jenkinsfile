pipeline {
    
    agent {
        node {
            label "nodejs"
        }
    }
    
    stages {

        stage("start stage") {
            steps {
                echo "Starting.."
            }
            post {
                always {
                    echo "Finished 1.."
                }   
            }   
        }
        
        stage("Sleep for 3 minutes") {
            steps {
                sh "sleep 180"
            }
            post {
                always {
                    echo "Finished 2.."
                }   
            }  
        }
    }
}