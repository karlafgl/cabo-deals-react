import React from 'react'
import './Card.css'


const timeConvert = (n) => {
    let num = n;
    let hours = (num / 60);
    let rhours = Math.floor(hours);
    let minutes = (hours - rhours) * 60;
    let rminutes = Math.round(minutes);
    return `${rhours}:${rminutes} hrs`
}

const Card = ({name, image, price, duration, description}) => {
    return(
        <div className="br2 fl w-100 ba pa2 ma2 dark-gray b--black-10 mv4 mw5 grow br3 shadow-4">
            <div className="mb3" >
                <img src={image} className="db w-100 br2 br--top" alt="" height="180rem"/>
            </div>
            <div className="w-100 mt1">
                <div className="dtc">
                    <p className="b f5 f4-ns mv0">{name}</p>
                </div>
                <hr className="mw5 b--black-10 bb bw1 center"/>
                <p className="b tr f5 mv0">{`$${price}.00`}</p>
                <ul className="pl0">
                    <li className="list"><i className="far fa-2x fa-clock pa2"></i>{timeConvert(duration)}</li>
                </ul>
                <p className="f6 lh-copy measure mt2 mid-gray">{description}</p>
                <div className="btn-holder">
                    <button className="f6 w-100 link dim ph3 pv2 mb2 dib white bg-light-purple mt3 pointer">Book Now</button>
                </div>
            </div>
        </div>
      

 
    )
}

export default Card