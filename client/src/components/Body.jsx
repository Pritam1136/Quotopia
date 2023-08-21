/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";

// import FontAwesomeIcon from "@fortawesome/free-solid-svg-icons";
import {
  faAngleRight,
  faArrowDown,
  faMugSaucer,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Body() {
  const [data, setData] = useState("");
  const [source, setSource] = useState("");

  async function quoteData(event) {
    event.preventDefault();
    const response = await fetch("http://localhost:5174/api/quote")
      .then((response) => response.json())
      .then((data) => {
        setData(data.quote);
        setSource(data.source);
      })
      .catch((error) => {
        setData("Error on getting data.");
        setSource("");
      });
  }
  return (
    <div className="font-serif">
      <h1 className="mx-12 mb-8 mt-36 flex justify-center font-mono  text-5xl text-gray-700 sm:text-7xl">
        Your quote generator
      </h1>
      <p className=" m-7 mt-12 flex h-7 justify-center p-1  align-middle text-xl font-thin ">
        Fuel your applications with a constant stream of thought-provoking
        quotes using our Random Quote Generator API, igniting inspiration and
        driving engagement like never before.
      </p>
      <p className="mb-8 ml-5 mt-44 flex h-5 justify-center p-2 align-middle font-bold sm:mt-36">
        Powered by React.js, Express.js and tailwindCSS
      </p>
      <div className="mt-16 flex justify-center">
        <button className="m-5 rounded-2xl p-3  outline transition duration-300 ease-in hover:bg-slate-600 hover:text-white">
          <Link to="/docs"> GET STARTED </Link>

          <FontAwesomeIcon className="p-2  align-middle" icon={faAngleRight} />
        </button>

        <button className="m-5 rounded-2xl p-3 outline transition duration-300 ease-in hover:bg-slate-600 hover:text-white">
          BUY ME A COFFEE
          <FontAwesomeIcon className="p-2 align-middle" icon={faMugSaucer} />
        </button>
      </div>
      <div className="my-28 flex justify-center align-middle text-5xl ">
        <FontAwesomeIcon icon={faArrowDown} bounce />
      </div>
      <div className="flex items-center justify-center">
        <div className=" flex max-w-screen-md justify-center bg-slate-700 sm:m-14 ">
          <div className="m-5 p-1 text-white">
            {" "}
            fetch("http://localhost:5174/api/quote") .then((response) ={
              ">"
            }{" "}
            response.json()) .then((data) ={">"} console.log(data))
            .catch((error) ={">"}console.log(error));"
          </div>
        </div>
      </div>
      <div className="m-8 flex justify-center align-middle">
        <button
          className="rounded-2xl p-3 align-middle  outline transition duration-500 ease-in-out hover:bg-slate-600 hover:text-white"
          onClick={quoteData}
        >
          RUN
        </button>
      </div>
      <div className="items-centre flex justify-center">
        <div className="flex max-w-screen-md justify-center bg-slate-700 sm:m-14">
          <div className="m-5 p-1 text-white">{data}</div>
        </div>
      </div>
      {source && (
        <div className="my-24 flex justify-center align-middle font-mono font-semibold">
          This thought is by {source}
        </div>
      )}
    </div>
  );
}

export default Body;
