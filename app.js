const searchInput = document.getElementById('search-user')
const github = new GitHub()

searchInput.addEventListener('keyup', (e) => {
  let searchVal = e.target.value
  if (searchVal !== '') {
    github.getUser(searchVal)
      .then(data => {
        if (data.profileData.message == 'Not Found') {
          console.log('not found: ', data)
          // show user not found
        } else {
          // show user data
          console.log({data})
        }
      })
  } else {
    // clear data
  }
})
