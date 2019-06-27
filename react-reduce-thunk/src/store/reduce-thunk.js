const getList = (state = {topics: []},action) => {
    switch (action.type) {
        case "FETCH_TOPICS":
            return {
                ...state,
                topics: action.payload.topics
            };
        default:
            return state;
    }
};


export{
    getList
}