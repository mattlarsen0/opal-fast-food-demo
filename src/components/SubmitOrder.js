import { useOrder } from "../hooks/useOrder"

export const SubmitOrder = () => {
    const {order} = useOrder();
    const submitOrderClick = () => {
        alert(`Submitted order with ${order.items.length} items!`)
    }

    return (
        <button className="submit-order" onClick={submitOrderClick}>Submit Order</button>
    );
}