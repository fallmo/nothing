pipeline {
    
    agent {
        node {
            label "nodejs"
        }
    }
    
    stages {

        stage("start stage") {
            echo "Starting.."
        }
        
        stage("SLeep for 3 minutes") {
            sh "sleep 180"
        }

        post {
            echo "Finished.."
        }

    }
}