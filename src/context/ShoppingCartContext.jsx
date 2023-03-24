import { useState,  createContext} from "react";


// const StateComponentProvider = ({children}) => {
//     const [counter, setCounter] = useState(0);
//     const increment=()=>{
//         setCounter(counter+1);
//     };
//     const decrement=()=>{
//         setCounter(counter-1);
//     };
    
//     return (
//         <CounterContext.Provider value={{counter, increment, decrement}}>
            
//             {children }
//         </CounterContext.Provider>
//     )
//     }

export const CartContext=createContext(null);

export const ShoppingCartProvider= ({children}) => {
        const [cart, setCart]=useState([]);
        const sumar = () => {
            if(contador<horas)
            {setContador(contador + 1)}
            ;
        };
        const restar = () => {
            if(contador >0)
            {setContador(contador - 1);}
            else{
                setContador(0)
            }
        };
        
    return (
        <CartContext.Provider value={[cart, setCart,sumar, restar]}>{children}</ CartContext.Provider>
    );
};

export default ShoppingCartProvider;