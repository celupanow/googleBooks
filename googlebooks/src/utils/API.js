import axios from "axios";

const bookKey = process.env.REACT_APP_GOOGLE_API_KEY;

export default {
    getBooks: function(query) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query + "&key=" + bookKey);
    }
};


