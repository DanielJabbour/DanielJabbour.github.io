function toggleClock() {
  // get the clock
  var myBooks = document.getElementById('books');

  // get the current value of the clock's display property
  var displaySetting = myBooks.style.display;

  // also get the clock button, so we can change what it says
  var bookButton = document.getElementById('bookButton');

  // now toggle the clock and the button text, depending on current state
  if (displaySetting == 'block') {
    // clock is visible. hide it
    myBooks.style.display = 'none';
    // change button text
    bookButton.innerHTML = 'Show clock';
  }
  else {
    // clock is hidden. show it
    myBooks.style.display = 'block';
    // change button text
    bookButton.innerHTML = 'Hide clock';
  }
}
