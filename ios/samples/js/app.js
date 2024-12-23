window.addEventListener('load', evt => {
  console.log('Window Loaded');
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    console.log('onreadystatechange', xhr.status, xhr.readyState);
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        console.log('Response:', xhr.responseText);
      } else {
        console.log('Error:', xhr.statusText);
      }
    }
  };
  xhttp.open('GET', 'data.json', true);
  xhttp.send();
  console.log('Window onload code executed');
});
