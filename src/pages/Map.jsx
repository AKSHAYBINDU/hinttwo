import React, { useState } from "react";
import hotelImg from "../assets/images/hotelImg.png";
import BottomNav from "../components/BottomNav";
import { useNavigate } from "react-router-dom";
import arrowDown from "../assets/icons/arrowDown.svg"

const Maps = () => {
  const [selectedButton, setSelectedButton] = useState("ongoing");
  const [isMapFullscreen, setIsMapFullscreen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  const handleButtonClick = (button) => {
    // handle the upcoming and ongoing events here.

    setSelectedButton(button);
  };

  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // handle the restaurant features.
  const handleClickRestaurant = () => {
    window.location.href = "https://www.flipkart.com";
  };

  const isOngoingSelected = selectedButton === "upcoming";

  // for toggling between map fullscreen.
  const toggleFullscreenMap = () => {
    setIsMapFullscreen((prev) => !prev);
  };

  return (
    <div className=" h-screen overflow-hidden ">
      {/* Have to implement the Map here. */}

      <section
        className={`map-section ${
          isMapFullscreen ? "h-full" : "h-1/4"
        } bg-black transition-all duration-300 ease-in-out`}
        // onClick={toggleFullscreenMap}
      >
        {/* Center the map in full screen */}
        <div
          onClick={
            // e.stopPropagation();
            toggleFullscreenMap
          }
          className="absolute inset-0 "
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.04711156077!2d73.78056543154419!3d18.524598599502376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1703161443092!5m2!1sen!2sin&q=18.5204,73.8567"
            className=" w-full h-[90%]"
            style={{ border: "0" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      {/* The list of Events */}

      <section
        className={`bg-black sticky h-screen overflow-auto rounded-t-[40px] ${
          isMapFullscreen ? "transform-translate-down" : ""
        }`}
      >
        <div className=" mt-11 mx-6">
          <div className=" flex justify-between items-center">
            <h3 className=" text-[#845CFC] text-2xl font-medium font-['Lufga']">
              The Listing
            </h3>
            <button className=" border border-white rounded-full p-3 taps" onClick={toggleFullscreenMap}>
              <img src={arrowDown} alt="map button " />
            </button>
          </div>
          <span className=" text-white text-base font-normal font-['Lufga'">
            Discover all the ongoing and upcoming events in your town.
          </span>
        </div>

        {/* Drop Down for Restaurant */}

        <div className=" flex flex-wrap justify-between items-center  m-6 gap-1">
          <div>
            <select
              id="dropdown"
              value={selectedOption}
              onChange={handleSelectChange}
              className="px-2 py-1 rounded-md  bg-black text-white text-xl outline-none text-opacity-95 border-none "
            >
              <option
                value=""
                className="  text-zinc-300 text-base font-normal font-['Lufga']"
              >
                Restaurant
              </option>
              <option
                value="option1"
                className="  text-zinc-300 text-base font-normal font-['Lufga']"
              >
                Bar
              </option>
              <option
                value="option2"
                className="  text-zinc-300 text-base font-normal font-['Lufga']"
              >
                Option 2
              </option>
              <option
                value="option3"
                className="  text-zinc-300 text-base font-normal font-['Lufga']"
              >
                Option 3
              </option>
            </select>

            {selectedOption && (
              <p className="mt-2">You selected: {selectedOption}</p>
            )}
          </div>
          <div className={`bg-white h-[38px]  flex rounded-[19px]  `}>
            <button
              className={`pl-5 button-transition-maps rounded-[19px] outline-none text-center text-xs font-medium overflow-hidden ${
                selectedButton === "ongoing"
                  ? "bg-[#845CFC] text-white   pr-7"
                  : "bg-transparent text-[#845CFC]  pr-7"
              }`}
              onClick={() => handleButtonClick("ongoing")}
            >
              Ongoing
            </button>
            <button
              className={`pr-5 button-transition-maps rounded-[19px]  outline-none text-center text-xs font-medium overflow-hidden ${
                selectedButton === "upcoming"
                  ? "bg-[#845CFC] text-white  pl-5"
                  : "bg-transparent text-[#845CFC] pl-5"
              }`}
              onClick={() => handleButtonClick("upcoming")}
            >
              Upcoming
            </button>
          </div>
        </div>

        {/* Upcoming Event List */}
        {isOngoingSelected ? (
          <section className=" grid gap-5 m-6 overflow-y-auto ">
            {/* Events should map through here */}
            <div
              onClick={handleClickRestaurant}
              className=" w-full h-32 maps-card-border-gradient overflow-hidden rounded-2xl flex "
            >
              <div className=" h-32 w-32 relative overflow-hidden rounded-2xl">
                <img
                  src={hotelImg}
                  alt="Event image"
                  className=" rounded-2xl  max-w-full max-h-fit"
                />
              </div>
              <div className=" mt-2 ml-6">
                <h3 className=" text-zinc-300 text-base font-normal font-['Lufga']">
                  Demon Slay Club
                </h3>
                <span className=" text-[#D9D9D9] text-xs leading-tight font-light font-['Lufga'] ">
                  FC ROAD, PUNE <br /> 179 ACTIVE USERS
                </span>
              </div>
            </div>

            <div className=" w-full h-32 maps-card-border-gradient overflow-hidden rounded-2xl flex ">
              <div className=" h-32 w-32 relative overflow-hidden rounded-2xl">
                <img
                  src={hotelImg}
                  alt="Event image"
                  className=" rounded-2xl  max-w-full max-h-fit"
                />
              </div>
              <div className=" mt-2 ml-6">
                <h3 className=" text-zinc-300 text-base font-normal font-['Lufga']">
                  Demon Slay Club
                </h3>
                <span className=" text-[#D9D9D9] text-xs leading-tight font-light font-['Lufga'] ">
                  FC ROAD, PUNE <br /> 179 ACTIVE USERS
                </span>
              </div>
            </div>

            <div className=" mt-32 w-full h-96"></div>
          </section>
        ) : (
          <section className=" grid gap-5 m-6 overflow-y-auto ">
            {/* Events should map through here */}
            <div
              onClick={handleClickRestaurant}
              className=" w-full h-32 maps-card-border-gradient overflow-hidden rounded-2xl flex "
            >
              <div className=" h-32 w-32 relative overflow-hidden rounded-2xl">
                <img
                  src={hotelImg}
                  alt="Event image"
                  className=" rounded-2xl  max-w-full max-h-fit"
                />
              </div>
              <div className=" mt-2 ml-6">
                <h3 className=" text-zinc-300 text-base font-normal font-['Lufga']">
                  Demon Slay Club
                </h3>
                <span className=" text-[#D9D9D9] text-xs leading-tight font-light font-['Lufga'] ">
                  FC ROAD, PUNE <br /> 179 ACTIVE USERS
                </span>
              </div>
            </div>

            <div className=" w-full h-32 maps-card-border-gradient overflow-hidden rounded-2xl flex ">
              <div className=" h-32 w-32 relative overflow-hidden rounded-2xl">
                <img
                  src={hotelImg}
                  alt="Event image"
                  className=" rounded-2xl  max-w-full max-h-fit"
                />
              </div>
              <div className=" mt-2 ml-6">
                <h3 className=" text-zinc-300 text-base font-normal font-['Lufga']">
                  Demon Slay Club
                </h3>
                <span className=" text-[#D9D9D9] text-xs leading-tight font-light font-['Lufga'] ">
                  FC ROAD, PUNE <br /> 179 ACTIVE USERS
                </span>
              </div>
            </div>

            <div className=" w-full h-32 maps-card-border-gradient overflow-hidden rounded-2xl flex ">
              <div className=" h-32 w-32 relative overflow-hidden rounded-2xl">
                <img
                  src={hotelImg}
                  alt="Event image"
                  className=" rounded-2xl  max-w-full max-h-fit"
                />
              </div>
              <div className=" mt-2 ml-6">
                <h3 className=" text-zinc-300 text-base font-normal font-['Lufga']">
                  Demon Slay Club
                </h3>
                <span className=" text-[#D9D9D9] text-xs leading-tight font-light font-['Lufga'] ">
                  FC ROAD, PUNE <br /> 179 ACTIVE USERS
                </span>
              </div>
            </div>

            <div className=" w-full h-32 maps-card-border-gradient overflow-hidden rounded-2xl flex ">
              <div className=" h-32 w-32 relative overflow-hidden rounded-2xl">
                <img
                  src={hotelImg}
                  alt="Event image"
                  className=" rounded-2xl  max-w-full max-h-fit"
                />
              </div>
              <div className=" mt-2 ml-6">
                <h3 className=" text-zinc-300 text-base font-normal font-['Lufga']">
                  Demon Slay Club
                </h3>
                <span className=" text-[#D9D9D9] text-xs leading-tight font-light font-['Lufga'] ">
                  FC ROAD, PUNE <br /> 179 ACTIVE USERS
                </span>
              </div>
            </div>

            <div className=" w-full h-32 maps-card-border-gradient overflow-hidden rounded-2xl flex ">
              <div className=" h-32 w-32 relative overflow-hidden rounded-2xl">
                <img
                  src={hotelImg}
                  alt="Event image"
                  className=" rounded-2xl  max-w-full max-h-fit"
                />
              </div>
              <div className=" mt-2 ml-6">
                <h3 className=" text-zinc-300 text-base font-normal font-['Lufga']">
                  Demon Slay Club
                </h3>
                <span className=" text-[#D9D9D9] text-xs leading-tight font-light font-['Lufga'] ">
                  FC ROAD, PUNE <br /> 179 ACTIVE USERS
                </span>
              </div>
            </div>

            <div className=" w-full h-32 maps-card-border-gradient overflow-hidden rounded-2xl flex ">
              <div className=" h-32 w-32 relative overflow-hidden rounded-2xl">
                <img
                  src={hotelImg}
                  alt="Event image"
                  className=" rounded-2xl  max-w-full max-h-fit"
                />
              </div>
              <div className=" mt-2 ml-6">
                <h3 className=" text-zinc-300 text-base font-normal font-['Lufga']">
                  Demon Slay Club
                </h3>
                <span className=" text-[#D9D9D9] text-xs leading-tight font-light font-['Lufga'] ">
                  FC ROAD, PUNE <br /> 179 ACTIVE USERS
                </span>
              </div>
            </div>
            <div className=" mt-32 w-full h-96"></div>
          </section>
        )}
      </section>

      {/* Bottom Navigation */}
      <div className="  w-full bg-black fixed bottom-0 backdrop-blur-6xl bg-transparent bg-gradient-to-t from-[#4B0E83] ">
        <div className=" mx-6 my-2">
          <BottomNav toggleFullscreenMap={toggleFullscreenMap} activeIndex={activeIndex} />
        </div>
      </div>
    </div>
  );
};

export default Maps;
