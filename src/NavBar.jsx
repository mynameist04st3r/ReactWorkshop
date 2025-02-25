import { useState } from 'react';

const NavBar = () => {
  const [selectOptions, setSelectOptions] = useState({});
  const handleCheckboxChange = (e) => {
    const {name, checked} = e.target;
    setSelectOptions((onOption) => ({ ...onOption, [name]: checked}));
  };
  return (

    <div className="nav-and-options-container">
      <div className="nav-container">
        <h3>Links</h3>
        <div>
          <a href="">Home</a>
        </div>
        <div>
          <a href="">About</a>
        </div>
        <div>
          <a href="">Contact</a>
        </div>
      </div>
      <div className="options-container">
        <ul>
          <li>
            <input
              type="checkbox"
              name="option1"
              checked={selectOptions.option1}
              onChange={handleCheckboxChange}
              /> Option 1
          </li>
          <li>
            <input
              type="checkbox"
              name="option2"
              checked={selectOptions.option2}
              onChange={handleCheckboxChange}
              /> Option 2
          </li>
          <li>
            <input
              type="checkbox"
              name="option3"
              checked={selectOptions.option3}
              onChange={handleCheckboxChange}
              /> Option 3
          </li>
        </ul>
      </div>
    </div>

  )
}

export default NavBar;