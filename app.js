const searchInput = document.getElementById('search-user')
const searchContainer = document.querySelector('.search-container')
const searchCard = document.querySelector('.search')
const github = new GitHub()
const ui = new Ui()

searchInput.addEventListener('keyup', (e) => {
  let searchVal = e.target.value
  if (searchVal !== '') {
    github.getUser(searchVal)
      .then(data => {
        if (data.profileData.message == 'Not Found') {
          ui.showAlert('User not found', 'alert alert-danger')
        } else {
          ui.showProfile(data.profileData)
        }
      })
  } else {
    ui.clearProfile()
  }
})
