import React from 'react'
import Card from 'react-bootstrap/Card';
import { useParams } from "react-router-dom";
import ItemCount from './ItemCount';
import { useEffect, useState  } from 'react';
//import { CartContext } from "../context/ShoppingCartContext";
import {doc, getDocs, getFirestore} from "firebase/firestore"


const ItemDetail = ({datos}) => {
    
    const { id } = useParams();
    const [personal, SetPersonal]=useState([]);
    useEffect(()=>{
        const db=getFirestore(); 
        
        const UnaPersona = doc(db, "vivacomerce", `${ id }`);
        getDocs(UnaPersona).then((snapshot)=>{
            if(snapshot.exists()){
                
            SetPersonal(snapshot.data());
            
            }else{
                console.log("persona no existe")
            }
        });
    }, []);
    

    const usuarioFilter=datos.filter((dato)=>dato.id == id);    

    console.log(datos)
        return (
        <>
                {usuarioFilter.map((dato) => (
                <div key={dato.id} className="contenedor-item">
                    <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src="https://www.adom.com.co/wp-content/uploads/2022/11/Medica-por-que-confiar-en-ADOM-600x620.jpg"/>
                    <Card.Body>
                    <Card.Title className='card-nombre' >NOMBRE:<br/>
                    {dato.nombre}</Card.Title>
                    <Card.Text className='card-cargo'>
                    CARGO:{dato.cargo}
                    </Card.Text>
                    <Card.Text className='card-cargo'>
                    FECHA:{dato.fecha}
                    </Card.Text>
                    <Card.Text className='card-cargo'>
                    IMAGEN:{dato.imagen}
                    </Card.Text>
                    <Card.Text className='card-cargo'>
                    HORAS DISPONIBLES:{dato.horas}
                    </Card.Text>
                    <Card.Text className='card-cargo'>
                    VALOR DE LA HORA:{dato.valor}
                    </Card.Text>
                    <Card.Text className='card-cargo'>
                    ID:{dato.id}
                    </Card.Text>
                    </Card.Body>
                    <ItemCount
                    nombre={dato.nombre}
                    horas={dato.horas}
                    cargo={dato.cargo}
                    fecha={dato.fecha}
                    id={dato.id} 
                    valor={dato.valor} 
                    imagen={dato.imagen}        
                    
                    />            
                    </Card>
                </div>
                
            ))};
        </>      
        );
    };   


export default ItemDetail;