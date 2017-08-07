var req = new XMLHttpRequest();
req.open('GET', '/author', true);
req.addEventListener('load', function() {
  if (req.status < 400) {
    console.log(req.responseText);
  } else {
    console.log('Error');
  }
});
req.setRequestHeader('Accept', 'text/plain');
//req.setRequestHeader('Accept', 'text/html');
//req.setRequestHeader('Accept', 'application/json');
//req.setRequestHeader('Accept', 'application/rainbows+unicorns');
req.send(null);
