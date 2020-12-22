const getUniqueID = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = Math.random() * 16;
    const v = c === 'x' ? r : (r && 0x3) || 0x8;
    return v.toString(16);
  });
};

export const featuredProducts = [
  {
    id: getUniqueID(),
    name: 'Bolo de chocolate',
    price: 4.99,
    oldPrice: 6.99,
    image: '/cake.jpg',
    featured: true,
    rate: 4,
  },
  {
    id: getUniqueID(),
    name: 'Bolo de Morango',
    price: 5.99,
    oldPrice: 6.99,
    image: '/cake.jpg',
    featured: true,
    rate: 4,
  },
  {
    id: getUniqueID(),
    name: 'Bolo de Churros',
    price: 4.99,
    oldPrice: 6.99,
    image: '/cake.jpg',
    featured: true,
    rate: 4,
  },
  {
    id: getUniqueID(),
    name: 'Bolo de Maçã',
    price: 8.99,
    oldPrice: 12.99,
    image: '/cake.jpg',
    featured: true,
    rate: 4,
  },
  {
    id: getUniqueID(),
    name: 'Bolo de Banana',
    price: 4.49,
    oldPrice: 7.99,
    image: '/cake.jpg',
    featured: true,
    rate: 4,
  },
];

export const popularProducts = [
  {
    id: getUniqueID(),
    name: 'Bolo Naked',
    price: 9.99,
    image: '/cake.jpg',
  },
  {
    id: getUniqueID(),
    name: 'Bolo de Festa',
    price: 4.99,
    image: '/cake.jpg',
  },
  {
    id: getUniqueID(),
    name: 'Bolo de Coco',
    price: 6.99,
    image: '/cake.jpg',
  },
  {
    id: getUniqueID(),
    name: 'Bolo de Casamento',
    price: 4.99,
    image: '/cake.jpg',
  },
  {
    id: getUniqueID(),
    name: 'Bolo de Abacaxi',
    price: 14.99,
    image: '/cake.jpg',
  },
  {
    id: getUniqueID(),
    name: 'Bolo de chocolate',
    price: 10.99,
    image: '/cake.jpg',
  },
  {
    id: getUniqueID(),
    name: 'Bolo de Cenoura',
    price: 4.99,
    image: '/cake.jpg',
  },
  {
    id: getUniqueID(),
    name: 'Bolo de Queijo',
    price: 8.99,
    image: '/cake.jpg',
  },
  {
    id: getUniqueID(),
    name: 'Bolo de Churros',
    price: 15.99,
    image: '/cake.jpg',
  },
  {
    id: getUniqueID(),
    name: 'Bolo de Banana',
    price: 4.49,
    image: '/cake.jpg',
  },
];

export const topBakerProducts = [
  {
    id: getUniqueID(),
    name: 'Bolo de Fubá',
    image: '/cake.jpg',
    price: 14.49,
  },
  {
    id: getUniqueID(),
    name: 'Bolo de Goiaba',
    image: '/cake.jpg',
    price: 8.49,
  },
  {
    id: getUniqueID(),
    name: 'Bolo de Milho',
    image: '/cake.jpg',
    price: 6.99,
  },
  {
    id: getUniqueID(),
    name: 'Bolo Formigueiro',
    image: '/cake.jpg',
    price: 11.49,
  },
  {
    id: getUniqueID(),
    name: 'Bolo de Laranja',
    image: '/cake.jpg',
    price: 5.49,
  },
];

export const recentProducts = [
  {
    id: getUniqueID(),
    name: 'Bolo Naked',
    price: 19.99,
    image: '/cake.jpg',
  },
  {
    id: getUniqueID(),
    name: 'Bolo de Banana',
    price: 8.99,
    image: '/cake.jpg',
  },
  {
    id: getUniqueID(),
    name: 'Bolo de Fubá',
    price: 7.49,
    image: '/cake.jpg',
  },
  {
    id: getUniqueID(),
    name: 'Bolo de Churros',
    price: 15.99,
    image: '/cake.jpg',
  },
  {
    id: getUniqueID(),
    name: 'Bolo de Leite',
    price: 13.99,
    image: '/cake.jpg',
  },
];

export const bytesProducts = [
  {
    id: getUniqueID(),
    name: 'Bolo de banana',
    price: 8.39,
    image: '/cake.jpg',
  },
  {
    id: getUniqueID(),
    name: 'Bolo de Mandioca',
    price: 4.99,
    image: '/cake.jpg',
  },
  {
    id: getUniqueID(),
    name: 'Bolo de Morango',
    price: 17.49,
    image: '/cake.jpg',
  },
  {
    id: getUniqueID(),
    name: 'Bolo de chocolate',
    price: 11.19,
    image: '/cake.jpg',
  },
  {
    id: getUniqueID(),
    name: 'Bolo de Laranja',
    price: 9.99,
    image: '/cake.jpg',
  },
];
