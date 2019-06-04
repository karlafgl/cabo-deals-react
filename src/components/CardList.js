import React from 'react'
import Card from './Card'


const CardList = ({dataActivity}) => {
 return(
     <div className="flex flex-wrap justify-center">
     {
        dataActivity.map((data, i)=> {
            return(
                <Card 
                    key={dataActivity[i].id}
                    name={dataActivity[i].name} 
                    image={dataActivity[i].image} 
                    price={dataActivity[i].price.adults} 
                    duration={dataActivity[i].duration} 
                    description={dataActivity[i].description}
                />
            )
         })
     }
     </div>
     
 )
}

export default CardList