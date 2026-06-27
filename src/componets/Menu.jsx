import menu from "../data/menu";
import "./menu.css";
import pizza from "/src/assets/pizza.jpg";
import pasta from "/src/assets/pasta.jpg";
import hotdrinks from "/src/assets/hotdrinks.jpg";
import salads from "/src/assets/salads.jpg";
import soups from "/src/assets/soups.jpg";
import colddrinks from "/src/assets/colddrinks.jpg";
import desserts from "/src/assets/desserts.jpg";
import Burgers from "/src/assets/Burgers.jpg";
import appetizers from "/src/assets/appetizers.jpg";

function Menu() {

const categories = [
  {
    title: "Pizza",
    image: pizza,
    count: menu.Pizza?.length || 0,
    price: menu.Pizza?.[0]?.price || 0
  },
  {
    title: "Pasta",
    image: pasta,
    count: menu.Pasta?.length || 0,
    price: menu.Pasta?.[0]?.price || 0
  },
  {
    title: "Burgers",
    image: Burgers,
    count: menu["Sandwiches & Burgers"]?.length || 0,
    price: menu["Sandwiches & Burgers"]?.[0]?.price || 0
  },
  {
    title: "Soups",
    image: soups,
    count: menu.Soups?.length || 0,
    price: menu.Soups?.[0]?.price || 0
  },
  {
    title: "Salads",
    image: salads,
    count: menu.Salads?.length || 0,
    price: menu.Salads?.[0]?.price || 0
  },
  {
    title: "Appetizers",
    image: appetizers,
    count: menu.Appetizers?.length || 0,
    price: menu.Appetizers?.[0]?.price || 0
  },

  // ⭐ NEW ADDITIONS FROM YOUR MENU

  {
    title: "Hot Drinks",
    image: hotdrinks,
    count: menu["Hot Drinks"]?.length || 0,
    price: menu["Hot Drinks"]?.[0]?.price || 0
  },
  {
    title: "Cold Drinks",
    image: colddrinks,
    count: menu["Cold Drinks"]?.length || 0,
    price: menu["Cold Drinks"]?.[0]?.price || 0
  },
  {
    title: "Desserts & Sweets",
    image: desserts,
    count: menu["Desserts & Sweets"]?.length || 0,
    price: menu["Desserts & Sweets"]?.[0]?.price || 0
  }
];

  return (
    <section className="menu" id="menu">
      <h4>WHAT WE SERVE</h4>
      <h1>Our Menu</h1>

      <div className="menu-grid">
        {categories.map((item, index) => (
          <div className="menu-card" key={index}>

            <img
              src={item.image}
              alt={item.title}
              className="menu-img"
            />

            <div className="card-content">
              <h3>{item.title}</h3>
              <p>{item.count}+ Varieties</p>
              <span>Starting ₹{item.price}</span>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

export default Menu;