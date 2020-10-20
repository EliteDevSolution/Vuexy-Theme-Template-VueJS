// NOTE
// Please use your own firebase details below. For more details visit: https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/documentation/development/firebaseIntegration.html


import firebase from 'firebase/app'

// Initialize Firebase
const config = {
  apiKey: 'your_apiKey',
  authDomain: 'your_authDomain',
  databaseURL: 'your_databaseURL',
  projectId: 'your_projectId',
  storageBucket: 'your_storageBucket',
  messagingSenderId: 'your_messagingSenderId'
}

firebase.initializeApp(config)
