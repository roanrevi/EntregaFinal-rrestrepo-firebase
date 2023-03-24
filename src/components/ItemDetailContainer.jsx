import React from 'react'
import  { useEffect, useState } from 'react'
import ItemDetail from "./ItemDetail";
import {collection, getDocs, getFirestore} from "firebase/firestore";


const ItemDetailContainer = () => {            
        
    const[personal, SetPersonal]=useState([])
    useEffect(()=>{
        const db=getFirestore(); 
        const itemsColection = collection(db, "vivacomerce");
        getDocs(itemsColection).then((snapshot)=>{
            const personal=snapshot.docs.map((doc)=>doc.data());            
            SetPersonal(personal);
            
            
        });
    }, []);
            
            console.log(personal)
    
            return (
                    

            <ItemDetail datos={personal}/>
            )
        
        }

export default ItemDetailContainer