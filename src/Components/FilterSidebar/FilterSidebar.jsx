import React from "react";

const categories = [
  "Shirts",
  "Dresses",
  "Trousers",
  "Jeans",
  "Skirts",
  "Jackets",
  "Sweaters",
  "Blouses",
  "Shorts",
  "Suits",
  "T-shirts",
  "Coats",
  "Pants",
  "Leggings",
  "Hoodies",
  "Swimwear",
  "Activewear",
  "Cardigans",
  "Polo Shirts",
  "Tank Tops",
  "Vests",
  "Sweatpants",
  "Tunics",
  "Sweatshirts",
  "Tights",
  "Socks",
  "Beanies",
  "Scarves",
  "Belts",
  "Gloves",
];

const brands = [
  "Nike",
  "Zara",
  "Adidas",
  "Levi's",
  "H&M",
  "The North Face",
  "Gap",
  "Forever 21",
  "American Eagle",
  "Calvin Klein",
  "Uniqlo",
  "Burberry",
  "Hollister",
  "Lululemon",
  "Puma",
  "Roxy",
  "Under Armour",
  "Urban Outfitters",
  "Ralph Lauren",
  "Abercrombie & Fitch",
  "Champion",
  "Old Navy",
  "Gucci",
  "Beanie Babies",
  "Hanes",
];

const collections = ["men", "women", "kids"];

const FilterSidebar = () => {
  return (
    <div className="h-full min-h-[5rem] max-h-[40rem] lg:max-h-screen lg:h-screen overflow-auto sticky top-0">
      <ul className="menu">
        <li>
          <details open>
            <summary className="text-xl lg:text-3xl text-start p-1 lg:py-2 border-b rounded-none">
              Collections
            </summary>
            {collections.map((collection, i) => (
              <div key={i} className="flex gap-2 items-center text-sm lg:text-xl lg:py-1">
                <input type="checkbox" name={collection} id={collection} />
                <label htmlFor={collection}>{collection}</label>
              </div>
            ))}
          </details>
        </li>
      </ul>

      <ul className="menu">
        <li>
          <details close={'true'}>
            <summary className="text-xl lg:text-3xl text-start p-1 lg:py-2 border-b rounded-none">
              Category
            </summary>
            {categories.map((category, i) => (
              <div key={i} className="flex gap-2 items-center text-sm lg:text-xl lg:py-1">
                <input type="checkbox" name={category} id={category} />
                <label htmlFor={category}>{category}</label>
              </div>
            ))}
          </details>
        </li>
      </ul>

      <ul className="menu">
        <li>
          <details close={'true'}>
            <summary className="text-xl lg:text-3xl text-start p-1 lg:py-2 border-b rounded-none">
              Brands
            </summary>
            {brands.map((brand, i) => (
              <div key={i} className="flex gap-2 items-center text-sm lg:text-xl lg:py-1">
                <input type="checkbox" name={brand} id={brand} />
                <label htmlFor={brand}>{brand}</label>
              </div>
            ))}
          </details>
        </li>
      </ul>
    </div>
  );
};

export default FilterSidebar;
