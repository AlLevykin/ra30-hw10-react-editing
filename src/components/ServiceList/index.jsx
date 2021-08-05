import React from "react";
import {nanoid} from "nanoid";

const ServiceList = (props) => {

  const items = [
    {
      id: nanoid(),
      name: "Замена стекла",
      price: 22.50
    },
    {
      id: nanoid(),
      name: "Замена материнской платы",
      price: 159.99
    }
  ];

  return (
    (items.length > 0) ? 
      <ul className="list-group list-group-flush">
        {
          items.map((item) =>
            <li className="list-group-item" key={item.id}>
              {item.name} {item.price}
            </li>
          )
        }
      </ul>
    :
      <></>
    );
  }

export default ServiceList;