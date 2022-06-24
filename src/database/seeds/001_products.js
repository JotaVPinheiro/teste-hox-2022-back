exports.seed = async (knex) => {
  await knex("products").del();
  await knex("products").insert(products);
};

const products = [
  {
    name: "Bola de basquete",
    manufactureDate: "2021-08-18",
    perishable: false,
    expirationDate: null,
    price: 45,
  },
  {
    name: "Arroz 5kg",
    manufactureDate: "2022-04-20",
    perishable: true,
    expirationDate: "2022-11-20",
    price: 33,
  },
  {
    name: "Feijão 1kg",
    manufactureDate: "2022-04-06",
    perishable: true,
    expirationDate: "2022-10-27",
    price: 7,
  },
  {
    name: "Corda 5m",
    manufactureDate: "2021-07-22",
    perishable: false,
    expirationDate: null,
    price: 22,
  },
  {
    name: "Meias",
    manufactureDate: "2022-03-10",
    perishable: false,
    expirationDate: null,
    price: 6,
  },
  {
    name: "Bolinho Ana Maria",
    manufactureDate: "2022-04-19",
    perishable: true,
    expirationDate: "2022-10-26",
    price: 4,
  },
  {
    name: "Cabo USB",
    manufactureDate: "2022-03-10",
    perishable: false,
    expirationDate: null,
    price: 16,
  },
  {
    name: "Carrinho de controle remoto",
    manufactureDate: "2022-04-23",
    perishable: false,
    expirationDate: null,
    price: 150,
  },
  {
    name: "Mouse Multilaser",
    manufactureDate: "2022-05-26",
    perishable: false,
    expirationDate: null,
    price: 0.5,
  },
  {
    name: "Ventilador",
    manufactureDate: "2022-05-01",
    perishable: false,
    expirationDate: null,
    price: 175,
  },
  {
    name: "Rede de dormir",
    manufactureDate: "2021-12-16",
    perishable: false,
    expirationDate: null,
    price: 65,
  },
  {
    name: "Boné",
    manufactureDate: "2022-05-23",
    perishable: false,
    expirationDate: null,
    price: 12,
  },
  {
    name: "Macarrão",
    manufactureDate: "2022-04-23",
    perishable: true,
    expirationDate: "2022-10-23",
    price: 4.5,
  },
  {
    name: "Cigarro Derby Vermelho",
    manufactureDate: "2022-03-17",
    perishable: true,
    expirationDate: "2022-09-23",
    price: 6.15,
  },
];
