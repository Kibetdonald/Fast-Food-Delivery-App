export const categories = [
  {
    id: 1,
    name: "Pizza",
    image: require("../assets/images/categoryImages/pizza.png"),
  },
  {
    id: 2,
    name: "Cupcake",
    image: require("../assets/images/categoryImages/cake.png"),
  },
  {
    id: 3,
    name: "Hamburger",
    image: require("../assets/images/categoryImages/hamburger.png"),
  },
  {
    id: 4,
    name: "Drinks",
    image: require("../assets/images/categoryImages/drink.png"),
  },
  {
    id: 5,
    name: "Noodles",
    image: require("../assets/images/categoryImages/spaghetti.png"),
  },
];

export const featured = {
  id: 1,
  title: "Hot and Spicy",
  description: "soft and tender fried chicken",
  restaurants: [
    {
      id: 1,
      name: "Papa Johns",
      image: require("../assets/images/restaurantsImages/restaurant1.jpeg"),
      description: "Hot and spicy pizzas",
      lng: -85.5324269,
      lat: 38.2145602,
      address: "434 second street",
      stars: 4,
      reviews: "4.4k",
      category: "Fast Food",
      dishes: [
        {
          id: 1,
          name: "Hamburger",
          description:
            "High quality beef medium to well with cheese and bacon on a multigrain bun",
          price: 10,
          image: require("../assets/images/categoryImages/hamburger.png"),
        },
        {
          id: 2,
          name: "Hamburger",
          description:
            "High quality beef medium to well with cheese and bacon on a multigrain bun",
          price: 10,
          image: require("../assets/images/categoryImages/hamburger.png"),
        },
        {
          id: 3,
          name: "Hamburger",
          description:
            "High quality beef medium to well with cheese and bacon on a multigrain bun",
          price: 10,
          image: require("../assets/images/categoryImages/hamburger.png"),
        },
      ],
    },
    {
      id: 2,
      name: "Papa Johns",
      image: require("../assets/images/restaurantsImages/restaurant2.jpg"),
      description: "Hot and spicy pizzas",
      lng: -85.5324269,
      lat: 38.2145602,
      address: "434 second street",
      stars: 4,
      reviews: "4.4k",
      category: "Fast Food",
      dishes: [
        {
          id: 1,
          name: "Hamburger",
          description:
            "High quality beef medium to well with cheese and bacon on a multigrain bun",
          price: 10,
          image: require("../assets/images/categoryImages/hamburger.png"),
        },
        {
          id: 2,
          name: "Hamburger",
          description:
            "High quality beef medium to well with cheese and bacon on a multigrain bun",
          price: 10,
          image: require("../assets/images/categoryImages/hamburger.png"),
        },
        {
          id: 3,
          name: "Hamburger",
          description:
            "High quality beef medium to well with cheese and bacon on a multigrain bun",
          price: 10,
          image: require("../assets/images/categoryImages/hamburger.png"),
        },
      ],
    },
    {
      id: 3,
      name: "Papa Johns",
      image: require("../assets/images/restaurantsImages/restaurant3.jpg"),
      description: "CJ's Restaurant",
      lng: -85.5324269,
      lat: 38.2145602,
      address: "434 second street",
      stars: 4,
      reviews: "4.4k",
      category: "Fast Food",
      dishes: [
        {
          id: 1,
          name: "Hamburger",
          description:
            "High quality beef medium to well with cheese and bacon on a multigrain bun",
          price: 10,
          image: require("../assets/images/categoryImages/hamburger.png"),
        },
        {
          id: 2,
          name: "Hamburger",
          description:
            "High quality beef medium to well with cheese and bacon on a multigrain bun",
          price: 10,
          image: require("../assets/images/categoryImages/hamburger.png"),
        },
        {
          id: 3,
          name: "Hamburger",
          description:
            "High quality beef medium to well with cheese and bacon on a multigrain bun",
          price: 10,
          image: require("../assets/images/categoryImages/hamburger.png"),
        },
      ],
    },
  ],
};
