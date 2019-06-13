node {
stage('Checkout') {
        //disable to recycle workspace data to save time/bandwidth
        deleteDir()
        checkout scm
    }
docker.image('trion/ng-cli-karma:7.3.5').inside {
      stage('NPM Install') {
          withEnv(["NPM_CONFIG_LOGLEVEL=warn"]) {
              sh 'npm install'
          }
      }
stage('Test') {
          withEnv(["CHROME_BIN=/usr/bin/chromium-browser"]) {
            sh 'ng test --progress=false --watch false'
          }
      }
stage('Lint') {
          sh 'ng lint'
      }
        
      stage('Build') {
          milestone()
          sh 'ng build --prod --progress=false'
      }
    
stage('SonarQube') {
          sh 'npm run sonar'
    }
    stage('Archive') {
        sh 'tar -cvzf dist.tar.gz --strip-components=1 dist'
        archive 'dist.tar.gz'
    }
stage('Deploy') {
        milestone()
        echo "Deploying..."
    }
  }
    
}