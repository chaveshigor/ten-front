export const editName = name => ({
    type: 'editName',
    payloads: {
        name: name
    }
})

export const getBorn = date => ({
    type: 'getBorn',
    payloads: {
        born: date
    }
})

export const getUserType = type => ({
    type: 'getUserType',
    payloads: {
        userType: type
    }
})

export const getGenre = genre => ({
    type: 'getGenre',
    payloads: {
        genre: genre
    }
})

export const myCollege = college => ({
    type: 'myCollege',
    payloads: {
        college: college
    }
})

export const collegeSituation = situation => ({
    type: 'collegeSituation',
    payloads: {
        situation: situation
    }
})