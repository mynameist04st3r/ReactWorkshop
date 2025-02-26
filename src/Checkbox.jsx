import {  } from 'react';

const Checkbox = ({ name, checked, onChange }) => {
  return (
    <li>
      <input
        type="checkbox"
        id={name}
        name={name}
        checked={checked}
        onChange={onChange}
      />
      <label for={name}>{name}</label>
    </li>
  );
};
export default Checkbox;