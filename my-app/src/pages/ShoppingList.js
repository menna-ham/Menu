import { Table } from "react-bootstrap"
import IncDecCounter from "./icrement/inc"

function ShoppingList(){
//     <div  >
//     <img className="shopimg" src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F44%2F2020%2F11%2F17%2Fcreamy-broccoli-pasta-1244.jpg"/>
// </div> 

    return(
        <>
        <p> Cart empty </p>
        <div className="col-8">
        <Table hover >
            <thead>
                <tr>
                <th>#</th>
                <th>Meal</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>

                </tr>
            </thead>
            <tbody>
                <tr>
                <td>1</td> 
                <td className="col-3">
                    <div>
                    <img className="col-3" src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F44%2F2020%2F11%2F17%2Fcreamy-broccoli-pasta-1244.jpg"/>   
                    </div>
                </td>  
                <td >Creamy Broccoli Pasta</td>
                <td>60</td>
                <td>1</td>
                <td>60</td>

                </tr>
                <tr >
                <td>2</td>    
                <td className="col-3">
                    <div>
                    <img className="col-3" src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F44%2F2020%2F11%2F17%2Fcreamy-broccoli-pasta-1244.jpg"/>   
                    </div>
                </td>  

                <td>Thornton</td>
                <td>@fat</td>
                <td> <IncDecCounter/> </td>
                <td>@mdo</td>

                </tr>
                <tr>
                <td>3</td>
                <td className="col-3">
                    <div>
                    <img className="col-3" src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F44%2F2020%2F11%2F17%2Fcreamy-broccoli-pasta-1244.jpg"/>   
                    </div>
                </td>  
                <td>Thornton</td>
                <td>@twitter</td>
                <td>@mdo</td>
                <td>@mdo</td>
                </tr>
            </tbody>
        </Table>
        </div>
        
        </>
    )

}

export default ShoppingList