import React, { useEffect, useState } from "react";
import axios from 'axios';
import Card from "../../components/card";
import { useDispatch , useSelector} from "react-redux";
import { addToFavorite } from "../../store/action";


function BreakFast(){
    const dispatch = useDispatch()
    const [Menu, setMenue] = useState([])
    const Favmenu = useSelector((state)=>{return state.menu})

    useEffect(()=>{
        axios.get('http://localhost:4000/foods')
        .then((res)=>{
                    setMenue(res.data)
                })
                .catch((err)=>{
                    console.log(err)
                })
    },[])

    const handelMenu=(id)=>{
        if (Favmenu.includes(id))
        {
            console.log(id)
            const index= Favmenu.indexOf(id)
            console.log(index)
            Favmenu.splice(index,1)
            dispatch(
                addToFavorite([...Favmenu])
            )
        }else{
            dispatch(addToFavorite([id, ...Favmenu]))
        }
    }
    return(

        <>

        <h3  className='tit p-1'> BreakFast </h3>
          <div className="MenList card-group m-1 p-1">
              {
                  Menu.map(men=>{
                      if(men.category=="BreakFast"){
                        return(
                            <>
                        <div key={men}>
                        <Card title={men.name}
                          poster={men.image} 
                          id={men._id} 
                          price={men.price}
                          addFun={handelMenu}
                          favMenu={Favmenu}
                          category={men.category}
                          />
                         </div>
                         
                        </>
                        )
                      }else{
                        <h1>Error</h1> 
                      }
                      
                  })
              }
          </div>

          


        

        </>
    )
}
export default BreakFast