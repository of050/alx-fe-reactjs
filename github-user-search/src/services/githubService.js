import axios from 'axios';

export const searchUsers = async (username, location, repos, page = 1) => {
  let query = '';
  if (username) query += `${username} in:login`;
  if (location) query += ` location:${location}`;
  if (repos) query += ` repos:>=${repos}`;

  const url = `https://api.github.com/search/users?q=${encodeURIComponent(
    query
  )}&page=${page}&per_page=30`;

  const response = await axios.get(url);
  return response.data;
};
