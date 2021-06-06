import {useState} from "react";

// debug menu json (taken from API and renamed member menu -> menuItems)
export const useDebugMenu = () => {
    const [menu, setMenu] = useState({
        "meta": {
          "version": 1.2,
          "date": "2017-04-20"
        },
        "menuItems": [
          {
            "item": "Burger",
            "options": [
              {
                "size": "regular",
                "price": 3
              }
            ]
          },
          {
            "item": "Soda",
            "options": [
              {
                "size": "small",
                "price": 0.99
              },
              {
                "size": "regular",
                "price": 1.5
              },
              {
                "size": "large",
                "price": 2
              },
              {
                "size": "too large",
                "price": 3.5
              }
            ]
          },
          {
            "item": "Fries",
            "options": [
              {
                "size": "small",
                "price": 0.99
              },
              {
                "size": "regular",
                "price": 1.5
              },
              {
                "size": "large",
                "price": 1.99
              }
            ]
          }
        ]
      }
      );

    return {
        menu, setMenu
    };
}

