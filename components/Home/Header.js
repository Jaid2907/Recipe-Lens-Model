import React from "react";
import style from "@/styles/Home.module.css";

const Header = () => {
  return (
    <>
      <div className={style.header}>
        <div className="container ">
          <div className="row align-items-center header">
            <div className="col-md-6 col-sm-8 col-12">
              <div className="d-flex justify-content-center">
                <div className="p-5">
                  <h1 className="display-1 fw-bold">Waste AI</h1>
                  <p>
                    Waste AI is a waste management system that uses AI to detect
                    waste and classify it into different categories.
                  </p>
                  <a
                    href="#about"
                    className="btn btn-main"
                  >
                    Explore More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;