(function(){
  function toggleSection()
  {
      if(location.hash=="#hashtrap"){
        document.getElementById("portfolioContent").style.display="block";
        document.getElementById("blogContent").style.display="none";
      }
          

      else
          document.getElementById("portfolioContent").style.display="none";
          document.getElementById("blogContent").style.display="block";
  }

  if(window.addEventListener)
  {
      window.addEventListener("hashchange",toggleSection,false);
      window.addEventListener("load",toggleSection,false);
  }

  else
  {
      window.attachEvent("onhashchange",toggleSection);
      window.attachEvent("onload",toggleSection);
  }
})();