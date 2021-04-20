import React from 'react';

const display=selectedProduct=>{
    return (
        <div style={{margin:10,width:'50%',display:'block'}}>
            <h2>{selectedProduct.title}</h2> 
             <div>
                 <img src={selectedProduct.image} height='50%' width='50%'/>                
             </div>
             <p>{selectedProduct.description}</p>
         </div>
    )
}

export default ({selectedProduct})=>{
    return(
        
            selectedProduct?display(selectedProduct):null
    )
}