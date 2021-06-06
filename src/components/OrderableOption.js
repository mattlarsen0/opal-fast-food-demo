import { useReducer } from "react"
import { useOrder } from "../hooks/useOrder";

export const OrderableOption = (props) => {
    const {option, itemName} = props;
    const {order, setOrder} = useOrder();

    const orderableItemReducer = (state, action) => {
        // update item quantity 
        const newState = applyOrderQuantityAction(state, action.type)

        // apply to order
        const newOrder = updateOrder(order, itemName, option.size, newState.quantity);
        setOrder(newOrder);

        return newState;
    };

    const [state, dispatch] = useReducer(orderableItemReducer, {
        quantity: 0
    });

    return (
        <div className="orderable-option">
          <button className="item-quantity-button" onClick={() => dispatch({type: "decrement"})}>-</button>
          <span>{state.quantity}</span>
          <button className="item-quantity-button" onClick={() => dispatch({type: "increment"})}>+</button>
          {props.children}
        </div>
      );
}

const applyOrderQuantityAction = (state, actionType) => {
    switch(actionType)
    {
        case "increment":
            return {
                quantity: state.quantity + 1
            }
        case "decrement":
            return {
                quantity: Math.max(state.quantity - 1, 0)
            }
        default:
            throw new Error(`reducer action ${actionType} not found"`);
    }
}

const updateOrder = (order, itemName, size, quantity) => {
    const itemToUpdate = order.items.find((i) => i.item === itemName && i.size === size);

    if (quantity === 0) {
        order.items = order.items.filter(i => i !== itemToUpdate);
        
    }
    else if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
    }
    else {
        // add item to order
        order.items.push({
            item: itemName,
            quantity: quantity,
            size: size
        })
    }

    return order;
}