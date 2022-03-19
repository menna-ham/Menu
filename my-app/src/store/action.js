//import axios from "axios";

export const addToFavorite=(payload)=>{
    return{
        type: 'Add-FAVORITE',
        payload,
    }
}

// export const getMovieList =()=> (dispatch)=>{


//     return axios.get("https://api.themoviedb.org/3/movie/popular?api_key=13e099732f0301dc3297bf57094255cb")
//     .then(
//             (res) => dispatch(
//                 {  
//                     type: 'ADDING_TO_FAVORITE',
//                     payload : res.data.results 
//                 }
//                 ),
//             (err) => console.log(err)
//      );
// };