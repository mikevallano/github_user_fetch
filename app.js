const searchInput = document.getElementById('search-user')

searchInput.addEventListener('keyup', (e) => {
  let searchVal = e.target.value
  if (searchVal !== '') {
    console.log({searchVal})
  }
})
