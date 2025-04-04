const githubService = {
  searchUsers: async (username, location, minRepos) => {
    const query = `${username} location:${location} repos:>${minRepos}`;
    const response = await fetch(`https://api.github.com/search/users?q=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data;
  }
};

export default githubService;