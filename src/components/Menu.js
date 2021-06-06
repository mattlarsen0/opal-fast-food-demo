import { useDebugMenu } from "../hooks/useDebugMenu"
import { MenuItem } from "../components/MenuItem"

export const Menu = () => {
    // Replace useDebugMenu with useMenu when API is working
    const {menu} = useDebugMenu();

    if (!menu?.menuItems) {
        return (
            <div></div>
        )
    }
    const menuItems = menu.menuItems.map(m => 
        <MenuItem key={m.item} name={m.item} options={m.options} />
    );

    return (
        <div className="fast-food-menu">
            {menuItems}
        </div>
    );
}