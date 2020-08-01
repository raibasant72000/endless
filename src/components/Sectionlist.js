import React from 'react';
import './Sectionlist.css'

const Sectionlist = (props)=>{
    
    const list = ({passDetails}) =>{
      if(passDetails){
        return passDetails.map((data) => {
          return(
            <div>
            {data.stepNumber}
     
            </div>
            
          )

        })
      }
    }
        return(
            <div className="heading">
              <h1> {list(props)}</h1>
             
              <h2>FILL OUT A PROFILE</h2>
              <p>We only want you to get games <br/>
              and gear that you'll love,so we'll <br/>
              ask for your prefernces up front</p> 
            </div>
        )
    
}
export default Sectionlist;




