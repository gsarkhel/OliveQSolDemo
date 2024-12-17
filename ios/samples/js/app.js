window.addEventListener('load', evt => {
  document.getElementsByClassName('loaderwrap')[0].innerHTML = 'Loaded';
  console.log('FROM INNER HTML');
  // document.getElementsByClassName('loaderwrap')[0].style.display = 'none';
  // document.getElementById('ifr').src = 'ece_1/index.html';


});

var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementsByClassName('loaderwrap')[0].innerHTML = this.responseText;
      
    }
  };
  xhttp.open("GET", "data.json", true);
  xhttp.send();