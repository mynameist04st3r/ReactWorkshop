import { useState, useEffect } from 'react';
import Checkbox from './Checkbox.jsx';
const Parent = () => {
  const [checkboxes, setcheckboxes] = useState([]);
  const [images, setImages] = useState([]); // assume this is the state for the carousel images
  useEffect(() => {
    // assuming you have a function to fetch the images and their corresponding checkbox data
    const fetchImagesAndCheckboxes = async () => {
      const response = await fetch('/api/images');
      const imageData = await response.json();
      setImages(imageData);
      const checkboxData = imageData.map((image) => ({
        name: image.name,
        checked: false,
      }));
      setcheckboxes(checkboxData);
    };
    fetchImagesAndCheckboxes();
  }, []);
  const handleCheckboxChange = (event) => {
    const updatedCheckboxes = checkboxes.map((checkbox) => {
      if (checkbox.name === event.target.name) {
        return { ...checkbox, checked: event.target.checked };
      }
      return checkbox;
    });
    setcheckboxes(updatedCheckboxes);
  };
  return (
    <ul>
      {checkboxes.map((checkbox) => (
        <Checkbox
          key={checkbox.name}
          name={checkbox.name}
          checked={checkbox.checked}
          onChange={handleCheckboxChange}
        />
      ))}
    </ul>
  );
};
export default Parent;
