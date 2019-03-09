const initialState = {
    name: '',
    profilePic: '',
    born: '',
    userType: '',
    genre: '',
    myCollege: '',
    collegeSituation: ''
}

const userReducer = (state = initialState, action) => {

    if(action.type == 'editName'){
        return { ...state, name: action.payloads.name }
    }

    if(action.type == 'getBorn'){
        return { ...state, born: action.payloads.born }
    }

    if(action.type == 'getUserType'){
        return { ...state, userType: action.payloads.userType }
    }

    if(action.type == 'getGenre'){
        return { ...state, genre: action.payloads.genre }
    }

    if(action.type == 'myCollege'){
        return { ...state, colege: action.payloads.college }
    }

    if(action.type == 'collegeSituation'){
        return { ...state, colege: action.payloads.collegeSituation }
    }

    return state
}

export default userReducer