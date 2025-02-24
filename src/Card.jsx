import { useState, useEffect } from 'react';


const Card = () =>{
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    for(let i=1; i<152;i++){

        fetch('https://pokeapi.co/api/v2/pokemon/${i}')
        .then(res => res.json())
        .then(pokemon => {
            const pokemonImages = {
                id: pokemon.id,
                src: pokemon.sprites.front_default,
                alt: pokemon.name
            };
            setImages(pokemonImages);
        })
        .catch(error => console.error(error));
    }
    }, []);
    const handleNextClick = () => {
      setCurrentIndex((currentIndex +1) % images.length);
    };
    const handlePrevClick = () => {
      setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    };

  return (
    <div className="carousel">
      <button className="prev" onClick={handlePrevClick}>
        &#x2039;
      </button>
      <button className="next" onClick={handleNextClick}>
        &#x203a;
      </button>
      <div className="innerCarousel">
        {images.slice(currentIndex, currentIndex + 4).map((image) => (
          <div key={image.id} className="carousel-item">
            <img src={image.src} alt={image.alt} />
            <p>{image.details}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Card;
