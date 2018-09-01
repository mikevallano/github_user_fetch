class GitHub {
  constructor() {
    this.client_id = config.client_id
    this.client_secret = config.client_secret
    this.base_url = 'https://api.github.com/users'
    this.repo_count = 5
    this.sort_order = 'created: asc'
    this.credentials = `client_id=${this.client_id}&client_secret=${this.client_secret}`
  }

  async getUser(userName) {
    const profileRepsonse = await fetch(`${this.base_url}/${userName}?${this.credentials}`)
    const repoResponse = await fetch(`${this.base_url}/${userName}/repos?per_page=${this.repo_count}&sort=${this.sort_order}&${this.credentials}`)
    const profileData = await profileRepsonse.json()
    const repoData = await repoResponse.json()

    return {
      profileData, // same as profileData: profileData
      repoData
    }
  }
}
