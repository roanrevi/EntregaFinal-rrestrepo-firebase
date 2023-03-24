import React from 'react'
import Item from "./Item";



const ItemList = ({datos}) => {
return (
        <div     className='contenedor-cards'>
            {datos?.map((dato)=>(
                
                <Item 
                key={dato.id}               
                id={dato.id}
                nombre={dato.nombre}
                cargo={dato.cargo}
                horas={dato.horas}
                fecha={dato.fecha}
                valor={dato.valor}
                imagen={dato.imagen}
                />

                ))}
        </div>
        );
    };
    

export default ItemList