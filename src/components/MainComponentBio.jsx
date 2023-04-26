import React from "react";

function MainComponentBio() {
  return (
    <>
      <div className="h-144 w-full lg:w-2/5 bg-white lg:rounded-lg">
        <img
          src="images/DSC_5579_resized2.jpg"
          className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"
        />
        <div>
          <h1 className="text-3xl pt-8 lg:pt-0 text-center">Bárdos Richárd</h1>
        </div>
      </div>

      <div className="absolute top-0 right-0 h-12 w-18 p-4">
        <button className="js-change-theme focus:outline-none">🌙</button>
      </div>
    </>
  );
}

export default MainComponentBio;
