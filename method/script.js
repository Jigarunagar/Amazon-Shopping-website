export const amazonHeader = `<nav class="navbar navbar-expand-lg amazon-header">
      <div class="container-fluid">
        <a class="navbar-brand fw-bold" href="/Amazon-Shopping-website/webpage/index.html"
          ><img src="/Amazon-Shopping-website/image/download.png" alt="" class="imagelogo"
        /></a>

        <button
          class="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarHeader"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarHeader">
          <div class="fontloaction d-none d-lg-block text-white me-4">
            <small>Delivering to Surat</small><br />
            <a href="#" class="text-warning text-decoration-none"
              ><i class="fa-solid fa-location-dot"></i> Update location</a
            >
          </div>
          <div class="flex-grow-1 mx-3 d-flex search-bar">
            <div class="input-group w-100">
              <select class="form-select" style="max-width: 70px">
                <option>All</option>
              </select>
              <input
                type="text"
                class="form-control"
                placeholder="Search Amazon.in"
              />
              <button class="btn btn-outline-warning" type="button">
                <i class="bi bi-search"></i>
              </button>
            </div>
          </div>
          <ul class="navbar-nav ms-auto align-items-center">
            <li class="nav-item dropdown me-3">
              <a
                class="language nav-link dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
              >
                <img src="https://flagcdn.com/in.svg" width="20" /> EN
              </a>
              <ul class="dropdown-menu dropdown-menu-end">
                <li><a class="dropdown-item" href="#">English</a></li>
                <li><a class="dropdown-item" href="#">हिन्दी</a></li>
              </ul>
            </li>
            <li class="nav-item me-3">
              <a class="account nav-link" href="/Amazon-Shopping-website/webpage/signup.html"
                >Sign in ,Create<br /><strong>Account & Lists</strong></a
              >
            </li>
            <li class="nav-item me-3">
              <a class="orders nav-link" href="/Amazon-Shopping-website/webpage/login.html"
                >Login<br /><strong>& Orders</strong></a
              >
            </li>
            <li class="nav-item cart-icon">
              <a class="nav-link" href="/Amazon-Shopping-website/webpage/addcard.html">
                <i class="bi bi-cart3 fs-5"></i> Cart
                <span class="cart-count">0</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <button
      class="alloption btn d-lg-none btn btn-light w-100"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#subNavMenu"
      aria-expanded="false"
      aria-controls="subNavMenu"
    >
      <i class="bi bi-list"></i> Menu
    </button>

    <div class="sub-nav collapse position-fixed d-lg-flex" id="subNavMenu">
      <a href="/Amazon-Shopping-website/webpage/index.html"><i class="bi bi-list"></i> All</a>
      <a href="/Amazon-Shopping-website/webpage/categorypage/MX.html">MX Player</a>
      <a href="/Amazon-Shopping-website/webpage/categorypage/offer.html">Sell</a>
      <a href="/Amazon-Shopping-website/webpage/categorypage/Bestsellers.html">Bestsellers</a>
      <a href="/Amazon-Shopping-website/webpage/categorypage/Today's Deals.html">Today's Deals</a>
      <a href="/Amazon-Shopping-website/webpage/categorypage/Mobiles.html">Mobiles</a>
      <a href="/Amazon-Shopping-website/webpage/categorypage/Prime.html">Prime</a>
      <a href="/Amazon-Shopping-website/webpage/categorypage/Fashion.html">Fashion</a>
      <a href="/Amazon-Shopping-website/webpage/categorypage/Customer Service.html">Customer Service</a>
      <a href="/Amazon-Shopping-website/webpage/categorypage/New Releases.html">New Releases</a>
      <a href="/Amazon-Shopping-website/webpage/categorypage/Electronics.html">Electronics</a>
      <a href="/Amazon-Shopping-website/webpage/categorypage/Amazon Pay.html">Amazon Pay</a>
      <a href="/Amazon-Shopping-website/webpage/categorypage/Home & Kitchen.html">Home & Kitchen</a>
      <a href="/Amazon-Shopping-website/webpage/categorypage/Computers.html">Computers</a>
    </div>`;  


export const footerhtml = `<div class="container">
        <div class="row">
          <div class="col-md-3 footer-section">
            <div class="footer-logo">
              <img src="/Amazon-Shopping-website/image/download.png" width="150px" alt="" />
            </div>
            <p class="footer-description">
              Hassle-free blogging platform that developers and teams love.
            </p>
            <div class="social-icons mt-3">
              <i class="bi bi-twitter-x"></i>
              <i class="bi bi-discord"></i>
              <i class="bi bi-linkedin"></i>
              <i class="bi bi-instagram"></i>
              <i class="bi bi-youtube"></i>
            </div>
          </div>
          <div class="col-md-2 footer-section">
            <h6>Product</h6>
            <div class="footer-links">
              <a href="#">Headless CMS <span class="badge">New</span></a>
              <a href="#">Pricing</a>
              <a href="#">GraphQL APIs</a>
              <a href="#">Open source Starter-kit</a>
            </div>
          </div>
          <div class="col-md-2 footer-section">
            <h6>Explore</h6>
            <div class="footer-links">
              <a href="#">My feed</a>
              <a href="#">Case studies</a>
              <a href="#">Hashnode AI</a>
              <a href="#">Referral Program</a>
            </div>
          </div>
          <div class="col-md-2 footer-section">
            <h6>Company</h6>
            <div class="footer-links">
              <a href="#">About Hashnode</a>
              <a href="#">Careers</a>
              <a href="#">Logos and media</a>
              <a href="#">Changelog</a>
              <a href="#">Feature Requests</a>
            </div>
          </div>
          <div class="col-md-3 footer-section">
            <h6>Search</h6>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search..."
                aria-label="Search"
              />
              <button class="btn btn-primary" type="submit">Submit</button>
            </form>
          </div>
        </div>
        <div class="footer-bottom text-center mt-4">
          <p class="mb-0">
            © 2024 Hashnode — LinearBytes Inc. |
            <a href="#" class="text-decoration-none text-light mx-2"
              >Privacy Policy</a
            >
            <a href="#" class="text-decoration-none text-light mx-2">Terms</a>
            <a href="#" class="text-decoration-none text-light mx-2"
              >Code of conduct</a
            >
          </p>
        </div>
      </div>`;

const style = document.createElement('style');
style.textContent = `
::-webkit-scrollbar {
  width: 5px;
}
::-webkit-scrollbar-track{
  background: #fff;
}
::-webkit-scrollbar-thumb{
  background-color: #FFC107;
  border-radius: 15px;
}

body {
    margin: 0px;
    padding-top: 122px;
  }
  .amazon-header {
    background-color: #131921;
    color: white;
    padding: 10px 15px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
  }

  .sub-nav {
    background-color: #232f3e;
    padding: 8px 20px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 15px;
    position: fixed;
    top: 84px;
    left: 0;
    width: 100%;
    z-index: 999;
  }

  .container-fluid a .imagelogo {
    width: 100px;
  }

  .amazon-header .nav-link,
  .amazon-header .navbar-brand,
  .amazon-header .dropdown-toggle {
    color: white !important;
  }

  .amazon-header .search-box {
    flex-grow: 1;
  }

  .amazon-header .form-control {
    border-radius: 0;
  }

  .amazon-header .search-btn {
    background-color: #febd69;
    border: none;
    border-radius: 0;
  }

  .sub-nav a {
    color: white;
    text-decoration: none;
    font-size: 14px;
  }

  .cart-icon {
    position: relative;
  }

  .cart-count {
    position: absolute;
    top: -5px;
    right: -10px;
    background-color: orange;
    color: black;
    border-radius: 50%;
    font-size: 12px;
    padding: 2px 6px;
  }
  .alloption {
    background: orange;
    color: white;
  }

  @media only screen and (min-width: 992px) and (max-width: 1093px) {
    .fontloaction {
      font-size: 12px;
    }
    .container-fluid .account {
      font-size: 12px;
    }
    .container-fluid .orders {
      font-size: 12px;
    }
    .container-fluid a .imagelogo {
      width: 90px;
    }
    .container-fluid .language {
      font-size: 12px;
    }
    .sub-nav {
      top: 72px;
    }
  }
  @media only screen and (max-width: 992px) {
    .alloption {
      position: fixed;
      top: 73px;
    }
    .sub-nav {
      top: 110px;
    }
    body {
      padding-top: 111px;
    }
  }
  @media only screen and (min-width: 993px) and (max-width: 1133px) {
    body {
      padding-top: 160px;
    }
  }

 footer {
        background-color: #131921;
        color: #c9d1d9;
        padding: 60px 0 30px;
        width: 100%;
        border-top-left-radius: 15px; 
        border-top-right-radius: 15px;
      }

      .footer-logo {
        font-weight: bold;
        font-size: 1.6rem;
        color: #58a6ff;
      }

      .footer-description {
        font-size: 0.95rem;
        margin-top: 10px;
        color: #8b949e;
      }

      .footer-section h6 {
        font-size: 1.1rem;
        margin-bottom: 15px;
        color: #ffffff;
      }

      .footer-links a {
        display: block;
        color: #8b949e;
        margin-bottom: 8px;
        font-size: 0.95rem;
        text-decoration: none;
        transition: color 0.2s ease-in-out;
      }

      .footer-links a:hover {
        color: #58a6ff;
      }

      .social-icons i {
        font-size: 1.25rem;
        margin-right: 12px;
        color: #8b949e;
        transition: color 0.3s ease;
      }

      .social-icons i:hover {
        color: #58a6ff;
      }

      .footer-bottom {
        border-top: 1px solid #30363d;
        padding-top: 20px;
        margin-top: 30px;
        font-size: 0.85rem;
      }

      .form-control::placeholder {
        color: #000000;
      } 

      .btn-primary {
        background-color: #000;
        border:1px solid #ffffff;
      }

      .btn-primary:hover {
        background-color: #ffffff;
        border: 1px solid #000;
        color: #000;
      }

      .badge {
        background-color: #238636;
        font-size: 0.65rem;
      }

      @media (max-width: 768px) {
        .footer-section {
          margin-bottom: 30px;
        }
      }
  `;
document.head.appendChild(style);
