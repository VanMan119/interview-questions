fetch("text.txt")
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(err => console.error(err));