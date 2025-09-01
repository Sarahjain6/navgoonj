"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const HeaderOne = () => {
  let pathname = usePathname();
  let [search, setSearch] = useState(false);
  let [mobileMenu, setMobileMenu] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handleSearch = () => {
    setSearch(!search);
  };

  const handleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  useEffect(() => {
    window.onscroll = () => {
      setScroll(window.pageYOffset > 150);
      return () => (window.onscroll = null);
    };
  }, []);

  const mobileMenuListRef = useRef(null);

  useEffect(() => {
    const desktopMenu = document.querySelector(".navbar__menu");
    if (desktopMenu && mobileMenuListRef.current) {
      mobileMenuListRef.current.innerHTML = desktopMenu.innerHTML;
    }
  }, []);

  return (
    <>
      <header className={`header header-secondary ${scroll ? "sticky-header" : ""}`}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="main-header__menu-box">
                <nav className="navbar p-0">
                  {/* Logo */}
                  <div className="navbar-logo">
                    <Link href="/">
                      <img src="/assets/images/logo.png" alt="Navgoonj Logo" />
                    </Link>
                  </div>

                  {/* Desktop Menu */}
                  <div className="navbar__menu-wrapper">
                    <div className="navbar__menu d-none d-xl-block">
                      <ul className="navbar__list">
                        <li className={`navbar__item nav-fade ${pathname === "/" ? "active" : ""}`}>
                          <Link href="/">Home</Link>
                        </li>
                        <li className={`navbar__item nav-fade ${pathname === "/about-us" ? "active" : ""}`}>
                          <Link href="/about-us">About</Link>
                        </li>
                        <li className={`navbar__item nav-fade ${["/our-causes", "/cause-details"].includes(pathname) ? "active" : ""}`}>
                          <Link href="/our-causes">Causes</Link>
                        </li>
                        <li className={`navbar__item nav-fade ${["/blog-list", "/blog-grid", "/blog-details"].includes(pathname) ? "active" : ""}`}>
                          <Link href="/">News</Link>
                        </li>
                        
                        <li className={`navbar__item nav-fade ${pathname === "/faq" ? "active" : ""}`}>
                          <Link href="/faq">FAQ</Link>
                        </li>
                        <li className={`navbar__item nav-fade ${pathname === "/contact-us" ? "active" : ""}`}>
                          <Link href="/contact-us">Contact</Link>
                        </li>
                      </ul>
                    </div>

                    {/* Contact Button */}
                    <div className="contact-btn">
                      <div className="contact-icon">
                        <i className="icon-support" />
                      </div>
                      <div className="contact-content">
                        <p>Call Us Now</p>
                        <a href="tel:01-793-7938">(+01)-793-7938</a>
                      </div>
                    </div>
                  </div>

                  {/* Navbar Options */}
                  <div className="navbar__options">
                    <div className="navbar__mobile-options ">
                      <div className="search-box">
                        <button
                          onClick={handleSearch}
                          className="open-search"
                          aria-label="search products"
                          title="open search box"
                        >
                          <i className="fa-solid fa-magnifying-glass" />
                        </button>
                      </div>
                      <Link href="/donate-us" className="btn--primary d-none d-md-flex">
                        Donate Now <i className="fa-solid fa-arrow-right" />
                      </Link>
                    </div>
                    <button
                      onClick={handleMobileMenu}
                      className="open-offcanvas-nav d-flex d-xl-none"
                      aria-label="toggle mobile menu"
                      title="open offcanvas menu"
                    >
                      <span className="icon-bar top-bar" />
                      <span className="icon-bar middle-bar" />
                      <span className="icon-bar bottom-bar" />
                    </button>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>

        {/* Search Popup */}
        <div className={`${search ? "search-active search-popup" : "search-popup"}`}>
          <button
            onClick={handleSearch}
            className="close-search"
            aria-label="close search box"
            title="close search box"
          >
            <i className="fa-solid fa-xmark" />
          </button>
          <form action="#" method="post">
            <div className="search-popup__group">
              <input
                type="text"
                name="search-field"
                id="searchField"
                placeholder="Search...."
                required
              />
              <button
                type="submit"
                aria-label="search products"
                title="search products"
              >
                <i className="fa-solid fa-magnifying-glass" />
              </button>
            </div>
          </form>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu mobile-menu--primary d-block d-xxl-none ${mobileMenu ? "show-menu" : ""}`}
      >
        <nav className="mobile-menu__wrapper">
          <div className="mobile-menu__header nav-fade">
            <div className="logo">
              <Link href="/" aria-label="home page" title="logo">
                <img src="assets/images/logo.png" alt="Navgoonj Logo" />
              </Link>
            </div>
            <button
              onClick={handleMobileMenu}
              aria-label="close mobile menu"
              className="close-mobile-menu"
            >
              <i className="fa-solid fa-xmark" />
            </button>
          </div>

          {/* Mobile Menu List */}
          <div className="mobile-menu__list" ref={mobileMenuListRef}></div>

          {/* Mobile CTA Button */}
          <div className="mobile-menu__cta nav-fade d-block d-md-none">
            <Link href="/donate-u" className="btn--primary">
              Donate Now <i className="fa-solid fa-arrow-right" />
            </Link>
          </div>

          {/* Social Icons */}
          <div className="mobile-menu__social social nav-fade">
            <Link href="https://www.facebook.com/" target="_blank" title="facebook">
              <i className="fa-brands fa-facebook-f" />
            </Link>
            <Link href="https://vimeo.com/" target="_blank" title="vimeo">
              <i className="fa-brands fa-vimeo-v" />
            </Link>
            <Link href="https://x.com/" target="_blank" title="twitter">
              <i className="fa-brands fa-twitter" />
            </Link>
            <Link href="https://www.linkedin.com/" target="_blank" title="linkedin">
              <i className="fa-brands fa-linkedin-in" />
            </Link>
          </div>
        </nav>
      </div>

      {/* Backdrop */}
      <div
        className={`mobile-menu__backdrop ${mobileMenu ? "mobile-menu__backdrop-active" : ""}`}
      ></div>
    </>
  );
};

export default HeaderOne;
