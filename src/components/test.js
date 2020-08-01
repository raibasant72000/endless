import React from 'react';

const Test =() =>{


    const names = ['ADhrit is a smart boy','Robot ','Aeroplane Army']
    const nameslist = names.map(name => 
        <h2 style={{color:"red"}}> {name} </h2>
    )
       
    return(

        <div>
        {
            nameslist
        }

              
        </div>
        

    )
}
export default Test;