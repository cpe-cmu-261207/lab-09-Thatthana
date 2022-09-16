import React from "react";
import Navbar from "../components/Navbar";

export default function experience() {
  return (
    <div>
      <div className="text-center">
        <Navbar />
        <p className="fw-bold fs-4">My Experience</p>
        <div className="card-group d-flex m-5">
          <div className="card bg-gray">
            <img src="/boxblock.png" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title fw-bold">Boxblock</h5>
              <p className="card-text">
                Boxblock is my project. Boxblox is voting program by
                blockchain.Boxblock was did by C++ .
              </p>
            </div>
          </div>
          <div className="card bg-gray">
            <img src="/cpp2.webp" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title fw-bold">C++</h5>
              <p className="card-text">
                I spend my time to learn c++ and use c++ to do my project
              </p>
            </div>
          </div>
          <div className="card bg-gray">
            <img src="/cat.jpg" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title fw-bold">Scratch</h5>
              <p className="card-text">
                At first I can't understand coding. I used to learn by scratch.
              </p>
            </div>
          </div>
        </div>
      </div>
      <p className="fw-light text-center">
        Ⓒthatthanasringeon.com by Thatthana Sringeon
      </p>
    </div>
  );
}
