import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="text rounded-3 d-flex justify-content-center gap-4">
        <img
          src="/thatthana2.jpg"
          className="rounded-circle"
          style={{ object: "cover", width: "300px" }}
        />
        <p>
          <span className="fw-bold fs-4">Thatthana Sringeon</span>
          <br />
          <br />
          <span className="fw-light">
            {" "}
            Hi,my name is thatthana. I graduate from chaingmai
            University.Studied Computer Engineering.{" "}
          </span>
          <br />
          <span className="fw-light">
            I love playing games. I'm interest to improving myskill.
          </span>
        </p>
      </div>
      <div className="d-flex justify-content-center gap-2 mt-4">
        <div className="card" style={{ width: "18rem" }}>
          <img src="/coding.webp" className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">C++ </h5>
            <p className="card-text">
              I can use C++ to coding and I used to create project by c++.
            </p>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img src="/gaming3.webp" className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">Gaming </h5>
            <p className="card-text">In my freetime, I like to playgame.</p>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img src="/bad.jpg" className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">Badminton</h5>
            <p className="card-text">
              I love to playing badminton. I have a litlle skill in badminton
              and I usually play with my friend on the weekend.
            </p>
          </div>
        </div>
      </div>
      <br />
      <p className="fw-light text-center">
        &#9400;thatthanasringeon.com by Thatthana Sringeon
      </p>
    </div>
  );
}
