
const baseURL = 'http://localhost:5000/api/players/'

const PlayerInfoService = {

    getPlayerInfo(){
        return fetch(baseURL)
        .then(res => res.json());
    },

    updatePlayerInfo(playerInfo) {
        if (!playerInfo._id){
            return
        }
        return fetch(baseURL + playerInfo._id, {
            method: 'PUT',
            body: JSON.stringify(playerInfo),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
    }

}

export default PlayerInfoService;