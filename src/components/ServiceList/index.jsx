import React from 'react';
import { nanoid } from 'nanoid';
import { Trash, Pen } from 'react-bootstrap-icons';

const ServiceList = props => {
  const items = [
    {
      id: nanoid(),
      name: 'Замена стекла',
      price: 22.5
    },
    {
      id: nanoid(),
      name: 'Замена материнской платы',
      price: 159.99
    }
  ];

  return items.length > 0 ? (
    <ul className="list-group list-group-flush">
      {items.map(item => (
        <li className="list-group-item" key={item.id}>
          <span>
            {item.name} {item.price}
          </span>
          <button type="button" className="btn btn-success ms-3">
            <Pen />
          </button>
          <button type="button" className="btn btn-danger ms-3">
            <Trash />
          </button>
        </li>
      ))}
    </ul>
  ) : (
    <></>
  );
};

export default ServiceList;
