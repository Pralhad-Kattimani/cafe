import menu from "../data/menu";
import "./menu.css";

function Menu() {

const categories = [
  {
    title: "Pizza",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
    count: menu.Pizza?.length || 0,
    price: menu.Pizza?.[0]?.price || 0
  },
  {
    title: "Pasta",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9",
    count: menu.Pasta?.length || 0,
    price: menu.Pasta?.[0]?.price || 0
  },
  {
    title: "Burgers",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    count: menu["Sandwiches & Burgers"]?.length || 0,
    price: menu["Sandwiches & Burgers"]?.[0]?.price || 0
  },
  {
    title: "Soups",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd",
    count: menu.Soups?.length || 0,
    price: menu.Soups?.[0]?.price || 0
  },
  {
    title: "Salads",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    count: menu.Salads?.length || 0,
    price: menu.Salads?.[0]?.price || 0
  },
  {
    title: "Appetizers",
    image: "https://images.unsplash.com/photo-1576107232684-1279f390859f",
    count: menu.Appetizers?.length || 0,
    price: menu.Appetizers?.[0]?.price || 0
  },

  // ⭐ NEW ADDITIONS FROM YOUR MENU

  {
    title: "Hot Drinks",
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348",
    count: menu["Hot Drinks"]?.length || 0,
    price: menu["Hot Drinks"]?.[0]?.price || 0
  },
  {
    title: "Cold Drinks",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735",
    count: menu["Cold Drinks"]?.length || 0,
    price: menu["Cold Drinks"]?.[0]?.price || 0
  },
  {
    title: "Desserts & Sweets",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c",
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