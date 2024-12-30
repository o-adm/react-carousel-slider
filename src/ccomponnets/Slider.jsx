import { MdOutlineNavigateNext } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { useState } from "react";

const slider = [
  {
    id: 1,
    url: "../hero-banner-1.jpg",
  },
  {
    id: 2,
    url: "../hero-banner-2.jpg",
  },
  {
    id: 3,
    url: "../hero-banner-3.jpg",
  },
];

function Slider() {
  const [currIndex, setCurIndex] = useState(0);
  const sliderLength = slider.length;

  function handleNext() {
    const nextIndex = currIndex < sliderLength - 1 ? currIndex + 1 : 0;
    setCurIndex(nextIndex);
    updateSliderIndex(nextIndex);
  }

  function handleBack() {
    const prevIndex = currIndex > 0 ? currIndex - 1 : sliderLength - 1;
    setCurIndex(prevIndex);
    updateSliderIndex(prevIndex);
  }

  function handleDot(value) {
    setCurIndex(value);
    updateSliderIndex(value);
  }

  function updateSliderIndex(index) {
    const slider = document.querySelector(".slider");
    slider.style.setProperty("--current-index", index);
  }

  return (
    <div className="slider">
      <div className="slider__images-container">
        {slider.map((slide, index) => (
          <img
            key={slide.id}
            src={slide.url}
            alt={`Slider ${index + 1}`}
            className={`slider__image ${index === currIndex ? "active" : ""}`}
          />
        ))}
      </div>
      <button
        onClick={handleNext}
        className="slider__btn slider__btn-next"
        aria-label="Slider next"
      >
        <MdOutlineNavigateNext />
      </button>
      <button
        onClick={handleBack}
        className="slider__btn slider__btn-back"
        aria-label="Slider back"
      >
        <IoIosArrowBack />
      </button>
      <div className="slider__dots">
        {slider.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDot(index)}
            className={`slider__dot ${currIndex === index ? "active" : ""}`}
            aria-current={currIndex === index ? "true" : "false"}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default Slider;
