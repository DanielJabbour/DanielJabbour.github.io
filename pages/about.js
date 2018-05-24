function toggleTab() {

  var myBooks = document.getElementById("books");
  var myPortfolio = document.getElementById("portfolio");

  var displaySettingBooks = myBooks.style.display; //check??
  var displaySettingPortfolio = myPortfolio.style.display;

  if (displaySettingBooks == "none"){
    myBooks.style.display = "block";
    myPortfolio.style.display = "none";
  }

  if (displaySettingPortfolio == "none") {
    myPortfolio.style.display = "block";
    myBooks.style.display = "none";
  }

}
