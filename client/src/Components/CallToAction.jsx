import { Button } from "flowbite-react";
import React from "react";

const CallToAction = () => {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      {/* left side */}
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl ">
          Want's to see some HTML, CSS, JAVASCRIPT and MERN Projects?
        </h2>
        <p className="text-gray-500 my-2">
          Chechout this github profile :&#41;
        </p>
        <Button
          gradientDuoTone="purpleToPink"
          className="rounded-tl-xl rounded-bl-none"
        >
          <a
            href="https://github.com/piyushkhatri968"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github Profile
          </a>
        </Button>
      </div>
      {/* right side */}
      <div className="p-7 flex-1">
        <img
          draggable="false"
          src="https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default CallToAction;
