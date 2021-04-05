import { Link } from 'react-router-dom';
import '../App.css';

function ProdHome() {
    const shoes = {
        'air-max-95-ndstrkt': {
          name: 'Air Max 95 NDSTRKT',
          img:
            'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/70c4cea6-f20b-44a4-90f4-61d8cc4c1f67/air-max-95-ndstrkt-mens-shoe-1qXsBq.jpg',
          price: 200,
          description:
            'Taking inspiration from the human body and running DNA, the Nike Air Max 95 NDSTRKT mixes unbelievable comfort with head turning style while adding in fresh, street-ready toughness. The classic lace "ribs" are updated with durable webbing and reflective hits while a new TPU cage is forged around the upper, mixing durability with sports-action style. Visible Air in the heel and forefoot keep the 90s style and cushions every step while large utility lugs add traction.',
        },
        'jordan-6-rings': {
          name: 'Jordan 6 Rings',
          img:
            'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/7f63c886-1507-40d8-9f51-8c5d9c4a7c3a/jordan-6-rings-mens-shoe-X9HJw4.png',
          price: 170,
          description:
            'JORDAN MARS 270 LONDON will take you from season to season with effortless style and will make your feet feel in heaven.',
        },
        'air-max-plus': {
          name: 'Air Max Plus',
          img:
            'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/erzfadfpnzgkxt0gn2ya/air-max-plus-mens-shoe-yKNzom.png',
          price: 160,
          description:
            'Let your attitude have the edge in your Nike Air Max Plus, a Tuned Air experience that offers premium stability and unbelievable cushioning. Featuring the OGs wavy design lines, TPU accents and airy mesh on the upper, it celebrates defiant style.',
        },
      };
  return (
    <div>
      <ul>
        {Object.entries(shoes).map(([productID,{name,img}])=> (
          <li key={productID}>
            <Link to={productID}>
                <h6>{name}</h6>
                <img src={img} alt={name}></img>
            </Link>
          </li>
         )
        )}
      </ul>
    </div>
  );
}

export default ProdHome;