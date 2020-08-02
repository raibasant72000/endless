import React from 'react';

const Test =() =>{


    const names = ['ADhrit love coding','Robot ','Aeroplane Army']
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