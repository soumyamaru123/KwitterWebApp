
//ADD YOUR FIREBASE LINKS
const firebaseConfig = {
    apiKey: "AIzaSyCiw4UMJ7c_7lP2tFRW7ngupzKNymXYIps",
    authDomain: "kwitterwebapp-90410.firebaseapp.com",
    databaseURL: "https://kwitterwebapp-90410-default-rtdb.firebaseio.com",
    projectId: "kwitterwebapp-90410",
    storageBucket: "kwitterwebapp-90410.appspot.com",
    messagingSenderId: "984186743731",
    appId: "1:984186743731:web:1dd8b8f70630380574f9c6",
    measurementId: "G-32T7B3BTPC"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  

  function adduser(){
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
         
            purpose : "adding user"
        });

  }