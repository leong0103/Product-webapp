import axios from "axios";

export const BASE_URL = "https://dummyjson.com/";

export const ENDPOINTS = {
    products: "products",
    categories: "categories",
    category: "category",
    search: "search"
}

export const createAPIEndpoint = (endpoint) => {
    let url = "";
    if (endpoint === ENDPOINTS.products) {
        url = BASE_URL + "products" + "/";
        return { 
            fetch: () => axios.get(url), 
            delete: id => axios.delete(url + id) 
        }
    } else
    if (endpoint === ENDPOINTS.categories) {
        url = BASE_URL + "products/" + endpoint + "/";
        return { fetch: () => axios.get(url) }
    } else
    if (endpoint === ENDPOINTS.search) {
        url = BASE_URL + "products/" + endpoint + "?q="
        return { fetch: (searchInput) => axios.get(url + searchInput) }
    } else
    if (endpoint === ENDPOINTS.category) {
        url = BASE_URL + "products/" + endpoint + "/";
        return { fetch: (type) => axios.get(url + type) }
    }
    return {
        fetch: () => axios.get(url),
        // delete: (id) => axios.delete(url) 
    }
}
