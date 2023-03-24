import React from 'react'
import { useEffect,useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import {collection, getDocs, getFirestore} from "firebase/firestore"

const ItemListConteiner = ({greeting}) => {
    const{cargo}=useParams();
    
    const[personal, SetPersonal]=useState([])
    useEffect(()=>{
        const db=getFirestore(); 
        const itemsColection = collection(db, "vivacomerce");
        getDocs(itemsColection).then((snapshot)=>{
            const personal=snapshot.docs.map((doc)=>doc.data());            
            SetPersonal(personal);
            
            
        });
    }, []);
    

            const persFilter=personal.filter((dato)=>dato.cargo==cargo);
            
    return (        
        <>        
            <p>{greeting}</p>
            {
                <div>
                    {cargo?<ItemList datos={persFilter}/> :  <ItemList datos={personal}/>}
                </div>                 
            }
        </>
    )
}



export default ItemListConteiner