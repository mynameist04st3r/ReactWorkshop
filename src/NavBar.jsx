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
        <div className="optionselector">
          <h4>Choose<br/>Features</h4>
        </div>
        <ul>
          <li>
            <input
              type="checkbox"
              id="option1"
              name="option1"
              checked={selectOptions.option1}
              onChange={handleCheckboxChange}
              />
              <label for="option1">Option 1</label>
          </li>
          <li>
            <input
              type="checkbox"
              id="option2"
              name="option2"
              checked={selectOptions.option2}
              onChange={handleCheckboxChange}
              />
              <label for="option2">Option 2</label>
          </li>
          <li>
            <input
              type="checkbox"
              id="option3"
              name="option3"
              checked={selectOptions.option3}
              onChange={handleCheckboxChange}
              />
              <label for="option3">Option 3</label>
          </li>
        </ul>
      </div>
    </div>

  )
}

export default NavBar;