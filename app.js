document.addEventListener('DOMContentLoaded', () => {
  const searchBox = document.getElementById('search-box');

  searchBox.addEventListener('input', () => {
    const searchTerm = searchBox.value.trim();
    let html = '';
    if (searchTerm.length > 0) {
      html = `<p>Searching for: ${searchTerm}</p>`;
    }
    searchResults.innerHTML = html;
  });
});