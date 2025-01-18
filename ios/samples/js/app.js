window.addEventListener('load', evt => {
  console.log('Window Loaded');
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    console.log(`onreadystatechange=> ${xhttp.responseText}`);
    // if (xhttp.readyState === XMLHttpRequest.DONE) {
    //   if (xhttp.status === 200) {
    //     console.log(`Response=> ${xhttp.responseText}`);
    //   } else {
    //     console.log(`Error:=> ${xhttp.statusText}`);
    //   }
    // }
  };
  xhttp.open('GET', 'data.json', true);
  xhttp.send();
  console.log('Window onload code executed');
});
