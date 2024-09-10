const API_Key = import.meta.env.Youtube_API_Key;

const BaseURL = "https://youtube138.p.rapidapi.com";

const options = {
  headers: {
    "x-rapidapi-key": API_Key,
    "x-rapidapi-host": "youtube138.p.rapidapi.com",
  },
};

export const FetchData = async (url) => {
  try {
    const { data } = await axios.get(`${BaseURL}/${url}`, options);
    return data;
  } catch (err) {
    console.log("Error fetching data");
  }
};
