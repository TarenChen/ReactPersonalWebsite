import React from 'react'
import './Items.css'

/* eslint-disable */

function Items(props){
        {
            return(
                <div className="Items">
                    <center>
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-4">
                                <img src={props.imgg}></img>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-8">
                                <h2> {props.name} </h2>
                                <p>{props.date}</p>
                                <p style ={{textAlign: 'left'}}>{props.p}</p>
                            </div>
                        </div>
                    </center>
                </div>
            )
        }
    }
export default Items