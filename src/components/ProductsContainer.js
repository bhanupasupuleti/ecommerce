import React,{useState,useEffect} from 'react';
import './products.css'

export default ({searchTerm,products,setSelectedProduct})=>{
    const [items,setItems]=useState([])
    useEffect(()=>{
        const modArray=products.filter(item=>item.title.trim().toLowerCase().includes(searchTerm))
        setItems(modArray)
    },[searchTerm])
    const setSelected=(item)=>{
        setSelectedProduct(item)
    }

    return(
        <div style={{margin:10,width:'50%'}} >
            {
                items.map(item=>(
                <div className='item' style={{textAlign:'left',padding:10}} onClick={()=>setSelected(item)}>
                    {item.title}
                </div>
                ))
            }
        </div>
    )
}