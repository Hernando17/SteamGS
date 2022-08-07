import axios from "axios";

export const getAll = async () => axios.get("https://store.steampowered.com/api/featuredcategories");