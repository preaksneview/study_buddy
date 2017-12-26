//need to figure out what all the ids are to hook up the database to the html-


//Init Firebase
  var config = {
    apiKey: "AIzaSyBJZvVH9uhCJVKjLZKED_YjUQtTv3ZOzZg",
    authDomain: "study-buddy-1.firebaseapp.com",
    databaseURL: "https://study-buddy-1.firebaseio.com",
    projectId: "study-buddy-1",
    storageBucket: "study-buddy-1.appspot.com",
    messagingSenderId: "242196700602"
  };

firebase.initializeApp(config);
//the is where the google auth begins....not sure if it all works
//but it should look something like what is below
// [START googlecallback]
function onSignIn(googleUser) {
  console.log('Google Auth Response', googleUser);
  // We need to register an Observer on Firebase Auth to make sure auth is initialized.
  var unsubscribe = firebase.auth().onAuthStateChanged(function(firebaseUser) {
    unsubscribe();
    // Check if we are already signed-in Firebase with the correct user.
    if (!isUserEqual(googleUser, firebaseUser)) {
      // Build Firebase credential with the Google ID token.
      // [START googlecredential]
      var credential = firebase.auth.GoogleAuthProvider.credential(
          googleUser.getAuthResponse().id_token);
      // [END googlecredential]
      // Sign in with credential from the Google user.
      // [START authwithcred]
      firebase.auth().signInWithCredential(credential).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // [START_EXCLUDE]
        if (errorCode === 'auth/account-exists-with-different-credential') {
          alert('You have already signed up with a different auth provider for that email.');
          // If you are using multiple auth providers on your app you should handle linking
          // the user's accounts here.
        } else {
          console.error(error);
        }
        // [END_EXCLUDE]
      });
      // [END authwithcred]
    } else {
      console.log('User already signed-in Firebase.');
    }
  });
}
// [END googlecallback]
/**
 * Check that the given Google user is equals to the given Firebase user.
 */
// [START checksameuser]
function isUserEqual(googleUser, firebaseUser) {
  if (firebaseUser) {
    var providerData = firebaseUser.providerData;
    for (var i = 0; i < providerData.length; i++) {
      if (providerData[i].providerId === firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
          providerData[i].uid === googleUser.getBasicProfile().getId()) {
        // We don't need to reauth the Firebase connection.
        return true;
      }
    }
  }
  return false;
}
// [END checksameuser]
/**
 * Handle the sign out button press.
 */
function handleSignOut() {
  var googleAuth = gapi.auth2.getAuthInstance();
  googleAuth.signOut().then(function() {
    firebase.auth().signOut();
  });
}
/**
 * initApp handles setting up UI event listeners and registering Firebase auth listeners:
 *  - firebase.auth().onAuthStateChanged: This listener is called when the user is signed in or
 *    out, and that is where we update the UI.
 */
function initApp() {
  // Auth state changes.
  // [START authstatelistener]
  firebase.auth().onAuthStateChanged(function(user){
    if (user) {
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      // [START_EXCLUDE]
      document.getElementById('quickstart-sign-in-status').textContent = 'Signed in';
      document.getElementById('signout').disabled = false;
      document.getElementById('quickstart-account-details').textContent = JSON.stringify(user, null, '  ');
      // [END_EXCLUDE]
    } else {
      // User is signed out.
      // [START_EXCLUDE]
      document.getElementById('quickstart-sign-in-status').textContent = 'Signed out';
      document.getElementById('signout').disabled = true;
      document.getElementById('quickstart-account-details').textContent = 'null';
        // [END_EXCLUDE]
    }
  });
  // [END authstatelistener]
  document.getElementById('signout').addEventListener('click', handleSignOut, false);
}
window.onload = function() {
  initApp();
};
//this is where the add meeting event takes place and begins
var database = firebase.database();

// Button for adding meeting database
$("#").on("click", function(event){
  event.preventDefault();

//User meeting input
var varName = $("#").val().trim();
var varName = $("#").val().trim();
var varName = $("#").val().trim();
var varName = $("#").val().trim();
var varName = $("#").val().trim();

// Object that will hold the meeting database

var newMeeting = {
  start: fbStart,
  end: fbEnd,
  desc: fbDesc,
  name: fbName,
};

//Push the meeting data to firebase
database.ref().push(newMeeting);

//Log information to console for easy review
  console.log(newMeeting.#);
  console.log(newMeeting.#);
  console.log(newMeeting.#);
  console.log(newMeeting.#);
  console.log(newMeeting.#);

  //Alert user that meeting was scheduled
  //Not sure if we need this in the app or not
  alert("Meeting Scheduled Successfully");

  //clear all the input boxes after meeting submission by user

  $("#WhateverTheIDIs").val("");
  $("#WhateverTheIDIs").val("");
  $("#WhateverTheIDIs").val("");
  $("#WhateverTheIDIs").val("");
  $("#WhateverTheIDIs").val("");

});

//Need to add in a function to print the next 5 meetings to a table in the html
//I know how to pull up the most recent 5 entered but am unsure how to do next 5 scheduled.
