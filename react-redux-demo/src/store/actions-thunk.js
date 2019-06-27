import axios from "axios"

function fetchTopics(page) {
    return function(dispatch) {
        axios.get("https://cnodejs.org/api/v1/topics?page=" + page).then(resp =>
            dispatch({ type: "FETCH_TOPICS", payload: { topics: resp.data.data } })
        );
    };
}

export default {
    fetchTopics,
}