document.getElementById('search-button').addEventListener('click', function() {
   const geneName = document.getElementById('gene-name').value;
   // Send a request to the server or database to search for the gene name
   fetch(`https://example.com/search?geneName=${geneName}`)
      .then(response => response.json())
      .then(data => {
           // Display the search results in the output div
           document.getElementById('output').innerHTML = data.results;
       })
      .catch(error => console.error(error));
});