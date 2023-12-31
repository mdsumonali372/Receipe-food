import React from "react";
import { Link } from "react-router-dom";
import CopyRight from "./CopyRight";

const Footer = () => {
  return (
    <div>
      <footer className="footer justify-between py-10 px-20 bg-neutral text-neutral-content ">
        <div>
          <span className="footer-title">Services</span>
          <Link to="#" className="link link-hover">
            Branding
          </Link>
          <Link to="#" className="link link-hover">
            Design
          </Link>
          <Link to="#" className="link link-hover">
            Marketing
          </Link>
          <Link to="#" className="link link-hover">
            Advertisement
          </Link>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <Link to="#" className="link link-hover">
            About us
          </Link>
          <Link to="#" className="link link-hover">
            Contact
          </Link>
          <Link to="#" className="link link-hover">
            Jobs
          </Link>
          <Link to="#" className="link link-hover">
            Press kit
          </Link>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <Link to="#" className="link link-hover">
            Terms of use
          </Link>
          <Link to="#" className="link link-hover">
            Privacy policy
          </Link>
          <Link to="#" className="link link-hover">
            Cookie policy
          </Link>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
      <CopyRight></CopyRight>
    </div>
  );
};

export default Footer;
