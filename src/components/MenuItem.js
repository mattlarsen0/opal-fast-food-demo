import { MenuItemName } from "../components/MenuItemName"
import { ItemOption } from "../components/ItemOption"
import { OrderableOption } from "./OrderableOption";

export const MenuItem = (props) => {
    const {name, options} = props;

    if (!name) {
        throw new Error("Required 'name' prop is missing")
    }

    if (!options) {
        throw new Error("Required 'options' prop is missing")
    }

    const menuOptions = options.map(o => (
        <OrderableOption key={`menu-item-${name}-${o.size}`} itemName={name} option={o}>
            <ItemOption size={o.size} price={o.price} />
        </OrderableOption>
    ));

    return (
        <div className="menu-item">
            <MenuItemName name={name} />
            {menuOptions}
        </div>
    )
}