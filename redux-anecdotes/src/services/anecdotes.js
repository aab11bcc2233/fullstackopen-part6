const { default: axios } = require("axios")


const baseUrl = "http://localhost:3001/anecdotes"

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const create = async (content) => {
  const data = {
    content: content,
    id: (100000 * Math.random()).toFixed(0),
    votes: 0
  }
  const response = await axios.post(baseUrl, data)
  return response.data
}

const vote = async (data) => {
  const response = await axios.put(`${baseUrl}/${data.id}`, data)
  return response.data
}

export default { getAll, create, vote }