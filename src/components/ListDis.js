import React, { useState } from "react";
// import Delete from './assets/Delete.png';

function ListDis(props) {

    return (
    <div
      className="container">
      <div>
        {
        
        props.List.map((key) => (
             
          <div className="d-flex justify-content-between" style={{textAlign: "center", display:'flex-box'}}> 
          <div
            key={key}
            style={{
              textAlign: "center",
              padding: "5px 5px 5px 5px ",
              margin:'3px',
              backgroundColor: "beige",
              borderRadius:'4px'
            }}
          >
            {key}
          </div>
          <button 
            style={{
                padding: "0px 5px 0px 5px ",
                margin:'3px',
                backgroundColor: "cyan",
                borderRadius:'4px'
              }}  
          onClick={()=>{
            let newlist = props.List;
            let ind=0;
            for(let i=0;i<newlist.length;i++)
            {
                if (newlist[i]==key) ind=i;
            }

            newlist.splice(ind,1);
           
            // console.log(newlist.find(key));

            props.setDelList([newlist]);
          }}>Del</button>
          </div>
          
         ))}
      </div>
    </div>
  );
}

export default ListDis;
