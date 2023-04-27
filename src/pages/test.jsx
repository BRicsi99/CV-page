import React from "react";

function test() {

  // this function is called when a small image is clicked
  function showModal(e) {
    const modal = e.target.src
    console.log(modal);
    //modal.classList.remove("hidden");
    //modalImg.src = src;
  }

  // this function is called when the close button is clicked
  function closeModal() {
    modal.classList.add("hidden");
  }

  return (
    <>
      <div class="p-20 grid grid-cols-4 gap-5">
        <img
            id="first"
          className="w-full h-full object-cover cursor-pointer"
          src="https://www.kindacode.com/wp-content/uploads/2022/07/flower-4.jpeg"
          alt="Flower"
          onClick={showModal}
        />

        <img
          class="w-full h-full object-cover cursor-pointer"
          src="https://www.kindacode.com/wp-content/uploads/2022/07/flower-3.jpeg"
          alt="Flower"
          onclick="showModal('https://www.kindacode.com/wp-content/uploads/2022/07/flower-3.jpeg')"
        />

        <img
          class="w-full h-full object-cover cursor-pointer"
          src="https://www.kindacode.com/wp-content/uploads/2022/07/flower-2.jpeg"
          alt="Flower"
          onclick="showModal('https://www.kindacode.com/wp-content/uploads/2022/07/flower-2.jpeg')"
        />

        <img
          class="w-full h-full object-cover cursor-pointer"
          src="https://www.kindacode.com/wp-content/uploads/2022/07/flower-1.jpeg"
          alt="Flower"
          onclick="showModal('https://www.kindacode.com/wp-content/uploads/2022/07/flower-1.jpeg')"
        />
      </div>

      <div
        id="modal"
        className="fixed top-0 left-0 z-80 w-screen h-screen bg-black/70 flex justify-center items-center"
      >
        <a
          className="fixed z-90 top-6 right-8 text-white text-5xl font-bold"
          href="https://www.kindacode.com/wp-content/uploads/2022/07/flower-1.jpeg"
          onClick="closeModal()"
        >
          &times;
        </a>

        <img id="modal-img" src="https://www.kindacode.com/wp-content/uploads/2022/07/flower-1.jpeg" className="max-w-[800px] max-h-[600px] object-cover" />
      </div>
    </>
  );
}

export default test;
