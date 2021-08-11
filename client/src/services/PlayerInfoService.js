const baseURL = 'http://localhost:5000/api/players/'

const PlayerInfoService = {

    getPlayerInfo(){
        return fetch(baseURL)
        .then(res => res.json());
    }

}

export default PlayerInfoService;