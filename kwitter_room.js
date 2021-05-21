
//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
      apiKey: "AIzaSyCx_Mix-LA9DCzfXg835bH1M3hzXvHpLFk",
      authDomain: "project-43-b9c90.firebaseapp.com",
      databaseURL: "https://project-43-b9c90.firebaseio.com",
      projectId: "project-43-b9c90",
      storageBucket: "project-43-b9c90.appspot.com",
      messagingSenderId: "569618627370",
      appId: "1:569618627370:web:c2e7339b6c10fd274ebc53",
      measurementId: "G-YKJ1P91FM0"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
