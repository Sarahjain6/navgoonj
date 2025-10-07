"use client";
import { useState } from "react";
import ModalVideo from "react-modal-video";
const DifferenceTwo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("mission");
  return (
    <>
      <section className='difference-two'>
        <div className='container'>
          <div className='row gutter-40 align-items-center'>
            <div className='col-12 col-lg-4 col-xxl-5 d-none d-lg-block'>
              <div className='difference-two__thumb-wrapper'>
                <div className='difference-two__thumb'>
                  <div
                    className='thumb-lg'
                    data-aos='fade-right'
                    data-aos-duration={1000}
                  >
                    <img
                      src='assets/images/difference/thumb-sm.png'
                      alt='Image_inner'
                    />
                    <div className='grid-line'>
                      <img
                        src='assets/images/help/grid.png'
                        alt='Image_inner'
                        className='base-img'
                      />
                    </div>
                    <div className='video-btn-wrapper'>
                      
                    </div>
                  </div>
                  <div
                    className='thumb-sm'
                    data-aos='fade-up'
                    data-aos-duration={1000}
                    data-aos-delay={300}
                  >
                    <img
                      src='assets/images/difference/thumb-lg.png'
                      alt='Image_inner'
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='col-12 col-lg-8 col-xxl-7'>
              <div className='difference-two__tab'>
                <div className='difference-two__content'>
                  <span className='sub-title'>
                    <i className='icon-donation' />
                    
                  </span>
                  <h2 className='title-animation_inner'>
                    About <span>Us</span>
                  </h2>
                  <p style={{ fontSize: '21px', lineHeight: '1.6' }}>
                    At NavGoonj , we believe that a strong community is built on compassion and support for all its members. We are a non-profit organization dedicated to creating a better world by addressing some of the most pressing needs of our society. Our mission is to uplift the lives of those often overlooked—our elders, vulnerable children, and our planet.
                  </p>

                  <div className='difference-two__inner cta'>
                    <div className='difference-two__inner-content'>
                      {/* TABS */}
                      {/* <div className='difference-two__tab'>
                        <div className='difference-two__tab-btns'>
                          <button
                            className={`difference-two__tab-btn ${
                              activeTab === "mission" ? "active" : ""
                            }`}
                            onClick={() => setActiveTab("mission")}
                            aria-label='mission'
                            title='mission'
                          >
                            Our Mission
                          </button>
                          <button
                            className={`difference-two__tab-btn ${
                              activeTab === "vision" ? "active" : ""
                            }`}
                            onClick={() => setActiveTab("vision")}
                            aria-label='vision'
                            title='vision'
                          >
                            Our Vision
                          </button>
                          <button
                            className={`difference-two__tab-btn ${
                              activeTab === "excellence" ? "active" : ""
                            }`}
                            onClick={() => setActiveTab("excellence")}
                            aria-label='excellence'
                            title='excellence'
                          >
                            Our Values
                          </button>
                        </div>

                        <div className='difference-two__tab-content'>
                          {activeTab === "mission" && (
                            <div
                              className='difference-two__content-single'
                              id='mission'
                            >
                              <ul>
                                <li>
                                  <i className='fa-solid fa-check' /> We help
                                  companies develop powerful corporate social
                                </li>
                                <li>
                                  <i className='fa-solid fa-check' /> We help
                                  companies develop powerful corporate social
                                </li>
                                <li>
                                  <i className='fa-solid fa-check' /> We help
                                  companies develop powerful corporate social
                                </li>
                                <li>
                                  <i className='fa-solid fa-check' /> Helped
                                  fund 3,265 Project powerful corporate poor
                                </li>
                                <li>
                                  <i className='fa-solid fa-check' /> Dedicated
                                  Tech Services
                                </li>
                              </ul>
                            </div>
                          )}
                          {activeTab === "vision" && (
                            <div
                              className='difference-two__content-single'
                              id='vision'
                            >
                              <ul>
                                <li>
                                  <i className='fa-solid fa-check' /> To create a harmonious society based on brotherhood, mutual cooperation, and trust.
                                </li>
                                <li>
                                  <i className='fa-solid fa-check' /> To build a future where every child has access to quality education and opportunities for growth.
                                </li>
                                <li>
                                  <i className='fa-solid fa-check' /> To work towards a nation where every individual lives with dignity, irrespective of caste, creed, religion, or social status.
                                </li>
                              </ul>
                            </div>
                          )}
                          {activeTab === "excellence" && (
                            <div
                              className='difference-two__content-single'
                              id='excellence'
                            >
                              <ul>
                                <li>
                                  <i className='fa-solid fa-check' /> Treating everyone with respect and dignity, regardless of caste, religion, or background.
                                </li>
                                <li>
                                  <i className='fa-solid fa-check' /> Cooperating with government bodies, other NGOs, and organizations to achieve shared goals effectively.                                </li>
                                <li>
                                  <i className='fa-solid fa-check' /> Ensuring donations, grants, and resources are used solely for the NGO’s aims and objectives.
                                </li>
                              </ul>
                            </div>
                          )}
                        </div>
                      </div> */}

                      {/* PROGRESS */}
                      {/* <div className='difference-two__progress'>
                        <div className='difference-progress-single'>
                          <div
                            className='progress-bar-single'
                            data-percent='75%'
                          >
                            <div className='circular-progress'>
                              <div className='percent-value'>55%</div>
                              <svg
                                className='progress-circle'
                                viewBox='0 0 36 36'
                              >
                                <path
                                  className='circle-bg'
                                  d='M18 2.0845
                         a 15.9155 15.9155 0 0 1 0 31.831
                         a 15.9155 15.9155 0 0 1 0 -31.831'
                                />
                                <path
                                  style={{ strokeDasharray: 55 }}
                                  className='circle-progress'
                                  d='M18 2.0845
                         a 15.9155 15.9155 0 0 1 0 31.831
                         a 15.9155 15.9155 0 0 1 0 -31.831'
                                />
                              </svg>
                            </div>
                          </div>
                          <div className='content'>
                            <p>
                              Treatment <br />
                              Helping
                            </p>
                          </div>
                        </div>
                        <div className='difference-progress-single'>
                          <div
                            className='progress-bar-single'
                            data-percent='92%'
                          >
                            <div className='circular-progress'>
                              <div className='percent-value'>85%</div>
                              <svg
                                className='progress-circle'
                                viewBox='0 0 36 36'
                              >
                                <path
                                  className='circle-bg'
                                  d='M18 2.0845
                         a 15.9155 15.9155 0 0 1 0 31.831
                         a 15.9155 15.9155 0 0 1 0 -31.831'
                                />
                                <path
                                  style={{ strokeDasharray: 60 }}
                                  className='circle-progress'
                                  d='M18 2.0845
                         a 15.9155 15.9155 0 0 1 0 31.831
                         a 15.9155 15.9155 0 0 1 0 -31.831'
                                />
                              </svg>
                            </div>
                          </div>
                          <div className='content'>
                            <p>
                              Highest <br />
                              Fund Raised
                            </p>
                          </div>
                        </div>
                      </div> */}
                    </div>

                    {/* CARD */}
                    {/* <div className='difference-two__card'>
                      <div className='card-group'>
                        <div className='thumb'>
                          <i className='icon-donation-card' />
                        </div>
                        <div className='content'>
                          <h6>Donate Now</h6>
                          <p>$40</p>
                        </div>
                      </div>
                      <hr />
                      <div className='card-group card-group-alt'>
                        <div className='thumb'>
                          <i className='icon-fund' />
                        </div>
                        <div className='content'>
                          <h6>Total Fundraised</h6>
                          <p>$1,456</p>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='spade'>
          <img src='assets/images/spade-green-two.png' alt='Image_inner' />
        </div>
      </section>
      <ModalVideo
        channel='youtube'
        autoplay
        isOpen={isOpen}
        videoId='XxVg_s8xAms'
        onClose={() => setIsOpen(false)}
        allowFullScreen
      />
    </>
  );
};

export default DifferenceTwo;
