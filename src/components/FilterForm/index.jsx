import React from 'react';
import { Funnel } from 'react-bootstrap-icons';

const FilterForm = () => {
  return (
    <form>
      <div className="input-group">
        <input type="text" className="form-control" />
        <button className="btn btn-primary" type="submit">
          <Funnel />
        </button>
      </div>
    </form>
  );
};

export default FilterForm;
