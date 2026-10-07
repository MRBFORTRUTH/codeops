import "./menu.css"
import Dish from "../../products/Dish";

const dishesMenu = [
  { "id": 1, "name": "Doro Wat", "category": "Main", "price": 240, "spicy": true, "image": "https://media.istockphoto.com/id/454977039/photo/meat-curry-with-egg-and-rolled-bread.jpg?s=612x612&w=is&k=20&c=ga01n9Bn_OnSlEHMEHl6hPX0DrmQmkRjw_MZroxrndU=" },
  { "id": 2, "name": "Shiro", "category": "Vegetarian", "price": 120, "spicy": false, "image": "#" },
  { "id": 3, "name": "Kitfo", "category": "Main", "price": 320, "spicy": true, "image": "#" },
  { "id": 4, "name": "Tibs", "category": "Main", "price": 280, "spicy": true, "image": "#" },
  { "id": 5, "name": "Injera Firfir", "category": "Breakfast", "price": 100, "spicy": true, "image": "#" },
  { "id": 6, "name": "Beyaynetu", "category": "Vegetarian", "price": 150, "spicy": false, "image": "#" },
  { "id": 7, "name": "Misir Wat", "category": "Vegetarian", "price": 110, "spicy": true, "image": "#" },
  { "id": 8, "name": "Gomen", "category": "Vegetarian", "price": 90, "spicy": false, "image": "#" },
  { "id": 9, "name": "Atkilt Wot", "category": "Vegetarian", "price": 100, "spicy": false, "image": "#" },
  { "id": 10, "name": "Derek Tibs", "category": "Main", "price": 310, "spicy": true, "image": "#" },
  { "id": 11, "name": "Key Wat", "category": "Main", "price": 220, "spicy": true, "image": "#" },
  { "id": 12, "name": "Alicha Wat", "category": "Main", "price": 210, "spicy": false, "image": "#" },
  { "id": 13, "name": "Bozena Shiro", "category": "Main", "price": 180, "spicy": true, "image": "#" },
  { "id": 14, "name": "Ayibe", "category": "Side", "price": 70, "spicy": false, "image": "#" },
  { "id": 15, "name": "Kocho", "category": "Side", "price": 60, "spicy": false, "image": "#" },
  { "id": 16, "name": "Enkulal Firfir", "category": "Breakfast", "price": 110, "spicy": true, "image": "#" },
  { "id": 17, "name": "Fuul", "category": "Breakfast", "price": 90, "spicy": true, "image": "#"},
  { "id": 18, "name": "Genfo", "category": "Breakfast", "price": 130, "spicy": true, "image": "#" },
  { "id": 19, "name": "Chechebsa", "category": "Breakfast", "price": 120, "spicy": true, "image": "#" },
  { "id": 20, "name": "Kik Alicha", "category": "Vegetarian", "price": 100, "spicy": false, "image": "#" }
]

function Menu() {
  return (
    <div className="menu">
      {dishesMenu.map((item) => {
        return <Dish key={item.id} dish={item}/>
      })
      }
    </div>
  );
}    
export default Menu;     