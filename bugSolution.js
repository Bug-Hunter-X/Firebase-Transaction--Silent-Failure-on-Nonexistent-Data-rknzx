function incrementCounter(uid) {
  const counterRef = db.ref('users/' + uid + '/counter');
  return counterRef.transaction(function(currentCounter) {
    if (currentCounter === null) {
      return 0; // Initialize counter to 0 if it doesn't exist
    } else {
      return currentCounter + 1;
    }
  });
}

incrementCounter('someUID').then(function() {
  console.log('Counter incremented!');
}).catch(function(error) {
  console.error('Error incrementing counter:', error);
});