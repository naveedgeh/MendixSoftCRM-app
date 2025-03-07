pipeline {
  agent any
  stages {
    stage('Checkout the Code/Github') {
      steps {
        git(url: 'https://github.com/naveedgeh/MendixSoftCRM-app', branch: 'main')
      }
    }

    stage('Node Check') {
      steps {
        nodejs('NodeJS-18') {
          sh 'npm -v'
        }

      }
    }

    stage('GITHUB 2 step ENV') {
      steps {
        git(url: 'https://github.com/naveedgeh/nextcrm-app-configs.git', branch: 'main', credentialsId: 'naveedgeh')
      }
    }

    stage('copy ENV files') {
      steps {
        sh 'ls  -lah'
        sh '''sh \'cd MendixSoftCRM-configs/fairis\'
sh \'cp .env ../../\'
sh \'cp .env.local ../../\'
sh \'cd ../../\'
sh \'ls -lah\''''
      }
    }

  }
}