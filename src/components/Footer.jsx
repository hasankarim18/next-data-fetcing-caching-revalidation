import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
      <div className="mt-[1000px]">
        <footer className="footer p-10 bg-neutral text-neutral-content">
          <div>
            <span className="footer-title">Services</span>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </div>
          <div>
            <span className="footer-title">Company</span>
            <Link href={'/blog'} className="link link-hover">Blog</Link>
            <Link prefetch={false} href={'/contact'} className="link link-hover">Contact</Link>
            
          </div>
          <div>
            <span className="footer-title">Legal</span>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </div>
        </footer>
      </div>
    );
};

export default Footer;