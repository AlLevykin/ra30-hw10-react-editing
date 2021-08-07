import React from 'react';
import { useDispatch } from 'react-redux';
import { Funnel, XCircle } from 'react-bootstrap-icons';
import { filterServiceList } from '../../actions/actionCreators';

const FilterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(filterServiceList('стекл'));
  };

  const handleClearFilter = () => dispatch(filterServiceList(''));

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group">
        <input type="text" name="filter" className="form-control" />
        <button className="btn btn-primary" type="submit">
          <Funnel />
        </button>
        <button className="btn btn-danger" onClick={handleClearFilter}>
          <XCircle />
        </button>
      </div>
    </form>
  );
};

export default FilterForm;
