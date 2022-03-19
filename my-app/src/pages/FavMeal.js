import { addToFavorite } from "../store/action";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import axios from "axios";
import { useEffect , useState } from "react";
import { Link } from "react-router-dom";


function FavMeal(){

    const dispatch = useDispatch()

    const [Menu,setMenu] = useState([])

    const FavMen= useSelector((state)=>{return state.menu})

    const filterMenu = Menu.filter((m)=>{
        return FavMen.includes(m.id)
    })

    useEffect(()=>{
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=6836d2d66066d4eb511ca7d62769eb97')
        .then((res)=>{
            setMenu(res.data.results)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])

    const handelMenu=(id)=>{
        if (FavMen.includes(id))
        {
            console.log(id)
            const index= FavMen.indexOf(id)
            console.log(index)
            FavMen.splice(index,1)
            dispatch(
                addToFavorite([...FavMen])
            )
        }else{
            dispatch(addToFavorite([id, ...FavMen]))
        }
    }

    return(
        <>
         <h1 style={{color:'#47B07F'}}> Favourit Meals </h1>
        <div className="card-group m-5 p-1" style={{alignItems:'center', marginLeft:'20%' , gap:'20px'}}>

        {filterMenu.map(men=>{
            return (
                <>
                <div className=" dets card m-2 p-2" style={{width: "18rem" }}>
                    <img src={`https://image.tmdb.org/t/p/w500/${men.poster_path}`} className="card-img-top" alt="..."/>

                    <div className="card-body" >
                        <h5 className="card-title">{men.title}</h5>
                        <p className="card-text"> Release Date: {men.date}</p>
                        <Link key={men.id} to={`/moviedetails/${men.id}`}>Details</Link><br/><br/>
                        <button type="button" className="btn btn-danger" onClick={()=>{handelMenu(men.id)}} >
                            Remove from Favourite </button>
                    </div>
                </div>
                </>
            )
        })}
        </div>
        </>
    )
}

export default FavMeal