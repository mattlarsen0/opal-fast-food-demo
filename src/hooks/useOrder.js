import {useState} from "react";

export const useOrder = () => {
    const [order, setOrder] = useState({
        items: []
    });
    
    return {
        order, 
        setOrder
    };
}