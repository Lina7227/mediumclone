export const getItem = key => {
    try {
        return JSON.parse(localStorage(key))
    } catch(error) {
        console.log("Error!", error);
        return null
    }
}

export const setItem = (key, data) => {
    try {
        localStorage.setItem(key, JSON.stringify(data))
    } catch(error) {
        console.log("Error!", error);
    }
}
