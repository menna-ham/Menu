import { faFileInvoiceDollar } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import mealData from '../Api/meals_updated.json'
import IncDecCounter from './icrement/inc'



function MealDetails(){
    const params = useParams([])
    const [Menu, setMenu] = useState({})

var recipe ; 
     
    useEffect(()=>{
        axios.get(`http://localhost:4000/foods/${params.id}`)
        .then((res)=>{
            console.log(res.data)
            setMenu(res.data)
         recipe= Menu.Recipeinfo

        })
        .catch((err)=>{
            console.log(err)
        })
    },[])


    for (const key in recipe) {
        console.log(`${key}:${recipe[key]}`)
        // return(
        //     <>
        //     <p> {key}{recipe[key]}</p>
        //     </>
        // )
    }
    
   
    return(
        <>
        <h1 style={{color:'#47B07F'}} className='m-5 p-2'> Meal Details</h1>

        <div className='details container p-5'>
            <div >
            <div className='tit'>
                    <h3> {Menu.name}</h3>
            </div>
            <img className='myimg' src={Menu.image}/>
            </div>
            <div >
                <div>
                    <h3 className='tit'> Details: </h3>
                    <div className='fs-4 m-2'> {Menu.details}</div>
                </div>
                <div>
                    <h3 className='tit'> Recipe Informations</h3>
                    {
                        
                        <div>
                        {Object.keys(recipe).map(key => (
                        <div>
                            <div className='fs-4 m-2'> {recipe[key]} </div>
                            <div className='fs-4 m-2'> {recipe[key]} </div>
                            <div className='fs-4 m-2'>{recipe[key]} </div>
                        </div>
                        ))}
                        </div>

                       // recipe.cookTime
                    }

                </div>

            </div>
            <div >
            <h3 className='tit'> Recipe Informations</h3>

            </div>

        </div>

        {/* <div className='details col-7 ' >

        <div>
            <img className='myimg' src={Menu.image}/>
        </div>

        <div>
            <div >
                <h3  className='tit p-1'> Title : </h3>
                <span className='tit fs-4 p-1'>{Menu.name}</span>
            </div><br/>

            <div >
                <h3  className='tit p-1'> Overview : </h3>
                <span className='fs-4 p-1'>  {Menu.details}</span>
            </div><br/>

            <div >
                <h3  className='tit p-1'> Release Date : </h3>
                <span className='fs-4 p-1'>{Menu.category}</span>
            </div><br/>

            <div >
                <h3  className='tit p-1'> Vote Average  : </h3>
                <span className='fs-4 p-1'>{Menu.Ingredients}</span>
            </div><br/>
            </div>           
        </div> */}
        </>
        
    )
    

}
export default MealDetails