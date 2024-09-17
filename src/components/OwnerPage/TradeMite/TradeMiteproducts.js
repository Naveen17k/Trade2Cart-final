// Import images for accessories
import battery1 from '../../../assets/products/trade/battery/images (15).jpg';
import battery2 from '../../../assets/products/trade/battery/mc battery.jpg';
import battery3 from '../../../assets/products/trade/battery/ups battery.jpg';
import battery4 from '../../../assets/products/trade/battery/vehicle battery.jpg';

import iron1 from '../../../assets/products/trade/iron/ms iron .jpg';
import iron2 from '../../../assets/products/trade/iron/iron metal sheet.jpg';
import iron3 from '../../../assets/products/trade/iron/pain and iron tins.jpg';

import metals1 from '../../../assets/products/trade/metals/aluminum.jpg';
import metals2 from '../../../assets/products/trade/metals/bc aluminum.jpg';
import metals3 from '../../../assets/products/trade/metals/brass.jpg';

import paper1 from '../../../assets/products/trade/papers/Books_06.jpg';
import paper2 from '../../../assets/products/trade/papers/notebook.jpg';
import paper3 from '../../../assets/products/trade/papers/school books.jpg';

import plastic1 from '../../../assets/products/trade/plastic/black plastic .jpg';
import plastic2 from '../../../assets/products/trade/plastic/pvc plastic.jpg';
import plastic3 from '../../../assets/products/trade/plastic/plastic.jpg';

import unusedproducts1 from '../../../assets/products/trade/unused products/AC 1 ton.jpg';
import unusedproducts2 from '../../../assets/products/trade/unused products/AC 1.5 ton.jpg';
import unusedproducts3 from '../../../assets/products/trade/unused products/AC stabilizer.jpg';
const TradeMiteproducts = {
  battery: [
    { id: 1, image: battery1, name: 'Battery 1', price: '₹15' },
    { id: 2, image: battery2, name: 'Battery 2', price: '₹50' },
    { id: 3, image: battery3, name: 'Battery 3', price: '₹59' },
    { id: 4, image: battery4, name: 'Battery 4', price: '₹59' },
  ],

  iron: [
    { id: 11, image: iron1, name: 'Metal Sheet', price: '₹1500' },
    { id: 12, image: iron2, name: 'MS Iron', price: '₹1500' },
    { id: 13, image: iron3, name: 'Pain and Iron Tins', price: '₹4200' },
  ],

  metals: [
    { id: 21, image: metals1, name: 'Aluminum', price: '₹2,300' },
    { id: 22, image: metals2, name: 'BC Aluminum', price: '₹3,200' },
    { id: 33, image: metals3, name: 'Brass', price: '₹3,300' },
  ],

  papers: [
    { id: 41, image: paper1, name: 'Books', price: '₹2,300' },
    { id: 42, image: paper2, name: 'Cotton Box', price: '₹32' },
    { id: 43, image: paper3, name: 'Notebooks', price: '₹45' },
  ],

  plastic: [
    { id: 51, image: plastic1, name: 'Black Plastic', price: '₹20' },
    { id: 52, image: plastic2, name: 'Plastic', price: '₹32' },
    { id: 53, image: plastic3, name: 'PVC Plastic', price: '₹45' },
  ],

  unusedproducts: [
    { id: 61, image: unusedproducts1, name: 'AC 1 TON', price: '₹50,000' },
    { id: 62, image: unusedproducts2, name: 'AC 1.5 TON', price: '₹72,000' },
    { id: 63, image: unusedproducts3, name: 'AC Stabilizer', price: '₹4,500' },
  ],
};

export default TradeMiteproducts;
