import React from 'react';
import { Funnel, XCircle} from 'react-bootstrap-icons';

const FilterForm = () => {
  return (
    <form>
      <div className="input-group">
        <input type="text" className="form-control" />
        <button className="btn btn-primary" type="submit">
          <Funnel />
        </button>
        <button className="btn btn-danger"><XCircle /></button>
      </div>
    </form>
  );
};

export default FilterForm;
