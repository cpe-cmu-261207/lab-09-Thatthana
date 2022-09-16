import React from "react";
import Navbar from "../components/Navbar";

export default function contact() {
  return (
    <div>
      <Navbar />
      <p className="fw-bold fs-4 text-center">Contact</p>
      <div className="d-flex justify-content-center gap-3">
        <img
          src="/thatthana2.jpg"
          className="rounded-circle"
          style={{ object: "cover", width: "250px" }}
        />
        <p>
          <br /> <br />
          <strong>Name :</strong>
          <span> Thatthana Sringeon</span> <br /> <br />
          <strong>NickName :</strong>
          <span> Fluke</span> <br /> <br />
          <strong>Facebook : </strong>{" "}
          <a
            href="https://www.facebook.com/tattana.sri"
            rel="noreferrer"
            target="_blank"
          >
            Thatthana Sringeon
          </a>{" "}
          <br /> <br />
          <strong>Email : </strong>{" "}
          <a
            href="https://outlook.office365.com/"
            rel="noreferrer"
            target="_blank"
          >
            thatthana_sri@cmu.ac.th
          </a>{" "}
          <br /> <br />
        </p>
      </div>

      <br />
      <p className="fw-light text-center">
        &#9400;thatthanasringeon.com by Thatthana Sringeon
      </p>
    </div>
  );
}
