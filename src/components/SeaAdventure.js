import React from 'react';
import Card from './Card'
import CardList from './CardList'
import dataActivity from '../data'

// const sea = ['sea-adventure']
// const answer = dataActivity.map((activity)=>{
//         return activity.taxonomy
// })
// console.log(answer)

// const results = Object.values(dataActivity).filter(({taxonomy:}) => 
//     categories.find(({id}) => id === selectedId)
// ).pop();


const SeaAdventure = () => {

    return(
        <div>
            <CardList dataActivity={dataActivity}/>
        </div>
    )
}

export default SeaAdventure