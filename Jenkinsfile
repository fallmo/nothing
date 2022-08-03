pipeline {
    
    agent {
        node {
            label "nodejs"
        }
    }
    
    stages {

        stage("start stage") {
            step {
                echo "Starting.."
            }
        }
        
        stage("SLeep for 3 minutes") {
            step {
                sh "sleep 180"
            }
        }

        post {
            step {
                echo "Finished.."
            }
        }

    }
}