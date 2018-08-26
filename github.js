class GitHub {
  constructor() {
    this.client_id = config.client_id
    this.client_secret = config.client_secret
    this.base_url = 'https://api.github.com/users'
  }

  async getUser(userName) {
    const profileRepsonse = await fetch(`${this.base_url}/${userName}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
    const profileData = await profileRepsonse.json()

    return {
      profileData // same as profileData: profileData
    }
  }
}
