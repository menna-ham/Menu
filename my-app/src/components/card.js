import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faL, faS, faStar  } from "@fortawesome/free-solid-svg-icons";
//import faSolid


class Card extends React.Component{
    constructor(props){
        super()
    }

    render(){
        return(
            <>
           <div className=" dets card m-1" >
                <div className="dis">
                    <img src={`${this.props.poster}`} className="card-img-top" alt="..."/>
                </div>
                    <p className="category"> {this.props.category} </p>
                    <div className="card-body" >
                        <h5 className="txt card-title">{this.props.title}</h5>
                        <p className="txt card-text"> Price: {this.props.price}</p>
                        <Link key={this.props.id} to={`/menudetails/${this.props.id}`}>Details</Link><br/><br/>
                        <button type="button" className="add btn btn-warning" onClick={()=>{this.props.addFun(this.props.id)}} >
                        <i className="far fa-star"></i> Add to Favourit </button> 

                        {/* <button className="tog icon" onClick={()=>{this.props.addFun(this.props.id)}}><i className="far fa-star"></i></button>
                        <button className="tog icon"><i className="fas fa-cart-plus"></i></button> */}
                            {/* <div>
                                {
                                    this.props.favMenu.includes(this.props.id)?(
                                        <button className=" icon" onClick={()=>{this.props.addFun(this.props.id)}}><i className="fas fa-star"></i></button>
                                    ):(
                                        <button className=" icon" onClick={()=>{this.props.addFun(this.props.id)}}><i className="far fa-star"></i></button>

                                    )
                                }
                            </div> */}
                        {/* {this.props.favMenu.includes(this.props.id)?(
                         <FontAwesomeIcon onClick={()=>{this.props.addFun(this.props.id)}} icon={faS} /> ):
                         <FontAwesomeIcon icon={faStar} onClick={()=>{this.props.addFun(this.props.id)}} />
                        } */}
                    </div>
            </div>

           </>
        )
    }
}
export default Card