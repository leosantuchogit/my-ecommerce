import axios from "axios";

const searchImages = async () => {

    const response = await axios.get("https://api.unsplash.com/search/photos", {
        headers: {
            Authorization: "Client-ID arMxV_TuA8oOETK4Y_AKEGnQUwkMWACKKiHPUg-Xv5A"
        }, 
        params: {
            query: "apples"
        }
    });

    console.log(response.data.results);

    return response;


}


export default searchImages;