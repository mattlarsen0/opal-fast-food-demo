import {useEffect, useState} from "react";

// API is broken due to CORS?
const menuApiEndpoint = "https://mobile-dev-code-project.s3-us-west-2.amazonaws.com/project.json";

export const useMenu = () => {
    const [menu, setMenu] = useState({
        menuItems: [],
        meta: {}
    });

    const apiOptions = {
        mode: "cors"
    };
    
    useEffect(() => {
        fetch(menuApiEndpoint, apiOptions)
            .then((response) => {
                if (response.ok) {
                    return response.json()
                }
                else {
                    throw new Error("Could not load menu from API")
                }
            })
            .then((menuResult) => {
                setMenu({
                    menuItems: menuResult.menu,
                    meta: menuResult.meta
                });
            })
    }, []);
    
    return {
        menu, setMenu
    };
}

