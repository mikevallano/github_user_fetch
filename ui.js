class Ui {
  constructor() {
    this.profile = document.getElementById('profile-result')
  }

  showProfile(user) {
    this.clearAlert()
    this.profile.innerHTML = `
    <div class="card card-body mb-3">
      <div class="row">
        <div class="col-md-3">
          <img class="img-fluid mb-2" src="${user.avatar_url}" alt="" />
          <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">Profile</a>
        </div>
        <div class="col-md-9 col-sm-12">
          <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
          <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
          <span class="badge badge-success">Followers: ${user.followers}</span>
          <span class="badge badge-info">Following: ${user.following}</span>
          <ul class="list-group mt-3">
            <li class="list-group-item">Company: ${user.company}</li>
            <li class="list-group-item">Website/Blog: ${user.blog}</li>
            <li class="list-group-item">Location: ${user.location}</li>
            <li class="list-group-item">Member since: ${user.created_at}</li>
          </ul>
        </div>
      </div>
    </div>
    <h3 class="page-heading mb-3">Latest Repos</h3>
    <div id="repos"></div>
    `
  }

  clearProfile() {
    this.profile.innerHTML = ''
  }

  showAlert(msg, className) {
    // this.profile.innerHTML = `<p class="mt-3 ${className}">${msg}</p>`
    this.clearAlert()
    this.clearProfile()
    const div = document.createElement('div')
    div.className = `mt-3 ${className}`
    const txt = document.createTextNode(msg)
    div.appendChild(txt)
    searchContainer.insertBefore(div, searchCard)
  }

  clearAlert() {
    let currentAlert = document.querySelector('.alert-danger')

    if (currentAlert) {
      currentAlert.remove()
    }
  }
}
