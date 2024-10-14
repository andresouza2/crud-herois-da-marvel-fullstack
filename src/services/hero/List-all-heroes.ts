import axios from '~/config/apiConfig'

async function listHeroes() {
	const response = await axios.get('/heroes')
	return response.data
}

export default { listHeroes }
