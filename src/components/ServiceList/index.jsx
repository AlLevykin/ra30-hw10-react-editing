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
              <span>{item.name} {item.price}</span>
              <button type="button" className="btn btn-danger mx-3">x</button>
            </li>
          )
        }
      </ul>
    :
      <></>
    );
  }

export default ServiceList;