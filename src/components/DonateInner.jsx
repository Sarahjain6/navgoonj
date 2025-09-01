"use client";
import Link from "next/link";
import { useState } from "react";

const DonateInner = () => {
  let [amount, setAmount] = useState(50);
  return (
    <div className='cm-details donate-us community checkout faq'>
      <div className='container'>
        <div className='row gutter-60'>
          <div className='col-12 col-xl-8'>
            <div className='cm-details__content'>
              <div
                className='cm-details__poster'
                data-aos='fade-up'
                data-aos-duration={1000}
                data-aos-delay={100}
              >
                <img
                  src='assets/images/event/poster-two.png'
                  alt='Image_inner'
                />
              </div>
              <div
                className='donate-inner'
                data-aos='fade-up'
                data-aos-duration={1000}
                data-aos-delay={100}
              >
                <div className='cm-group'>
                  <h3 className='title-animation_inner'>
                    Help Children Rise out of Poverty
                  </h3>
                  <p>
                   Every small step can lead to a big change. At Navgoonj, we believe that together, 
                   we can build a world where every child learns, every family thrives, and every community grows stronger.
                  </p>
                </div>
                <div className='cta'>
                  <div className='community-donation'>
                    <div className='community-donation__inner'>
                      <h5>Support Where It Counts.</h5>
                      {/*<div className='warning'>
                        <div className='line'>
                          <i className='fa-solid fa-triangle-exclamation' />
                        </div>
                        <p>
                          <strong>Notice:</strong> Test mode is enabled. While
                          in test mode no live donations are processed.
                        </p>
                      </div>*/}
                      <div className='donation-form' data-aos-delay={300}>
                        <div className='donation-form__single'>
                          <h5>Your Donation:</h5>
                          <div className='input-group-icon'>
                            <div className='thumb'>
                              <i className='fa-solid fa-dollar-sign' />
                            </div>
                            <input
                              type='text'
                              name='donation-amount'
                              id='donationAmount'
                              value={amount}
                              onChange={(e) => setAmount(e.target.value)}
                            />
                          </div>
                          <div className='made-amount'>
                            <span
                              className={`donation-amount ${
                                amount === 20 && "active"
                              }`}
                              onClick={() => setAmount(20)}
                            >
                              20
                            </span>
                            <span
                              className={`donation-amount ${
                                amount === 50 && "active"
                              }`}
                              onClick={() => setAmount(50)}
                            >
                              50
                            </span>
                            <span
                              className={`donation-amount ${
                                amount === 100 && "active"
                              }`}
                              onClick={() => setAmount(100)}
                            >
                              100
                            </span>
                            <span
                              className={`donation-amount ${
                                amount === 200 && "active"
                              }`}
                              onClick={() => setAmount(200)}
                            >
                              200
                            </span>
                            <span
                              className={`donation-amount custom-amount ${
                                amount === 0 && "active"
                              }`}
                              onClick={() => setAmount(0)}
                            >
                              Custom
                            </span>
                          </div>
                        </div>
                        <div className='donation-form__single'>
                          <h5>Select Payment Method</h5>
                          <div className='radio-wrapper'>
                            <div className='radio-single'>
                              <input
                                type='radio'
                                id='testDonation'
                                name='donation-payment'
                                defaultChecked=''
                              />
                              <label htmlFor='testDonation'>
                                Test Donation
                              </label>
                            </div>
                            <div className='radio-single'>
                              <input
                                type='radio'
                                id='offlineDonation'
                                name='donation-payment'
                                defaultChecked=''
                              />
                              <label htmlFor='offlineDonation'>
                                Offline Donation
                              </label>
                            </div>
                            <div className='radio-single'>
                              <input
                                type='radio'
                                id='cardDonation'
                                name='donation-payment'
                                defaultChecked=''
                              />
                              <label htmlFor='cardDonation'>Credit Card</label>
                            </div>
                          </div>
                        </div>
                        <div className='cta'>
                          <Link
                            href='/donate-us'
                            aria-label='donate us'
                            title='donate us'
                            className='btn--primary'
                          >
                            Donate Now <i className='fa-solid fa-arrow-right' />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className='checkout__form'>
                      <div className='intro'>
                        <h5>Details Information</h5>
                      </div>
                      <form>
                        <div className='input-group'>
                          <div className='input-single'>
                            <input
                              type='text'
                              name='c-name'
                              id='cName'
                              placeholder='First Name'
                              required=''
                            />
                            <i className='fa-solid fa-user' />
                          </div>
                          <div className='input-single'>
                            <input
                              type='text'
                              name='c-lastname'
                              id='clastName'
                              placeholder='Last Name'
                              required=''
                            />
                            <i className='fa-solid fa-user' />
                          </div>
                        </div>
                        <div className='input-group'>
                          <div className='input-single'>
                            <input
                              type='email'
                              name='c-email'
                              id='cEmail'
                              placeholder='Your Email'
                              required=''
                            />
                            <i className='fa-solid fa-envelope' />
                          </div>
                          <div className='input-single'>
                            <input
                              type='text'
                              name='c-phone'
                              id='cPhone'
                              placeholder='Your Number'
                              required=''
                            />
                            <i className='fa-solid fa-phone' />
                          </div>
                        </div>
                        <div className='input-single'>
                          <input
                            type='text'
                            name='c-address-two'
                            id='cAddressTwo'
                            placeholder='Your Address'
                            required=''
                          />
                          <i className='fa-solid fa-location-dot' />
                        </div>
                        <div className='input-single alter-input'>
                          <textarea
                            name='contact-message'
                            id='contactMessage'
                            placeholder='your message...'
                            defaultValue={""}
                          />
                          <i className='fa-solid fa-envelope' />
                        </div>
                        <div className='form-cta'>
                          <button
                            type='submit'
                            aria-label='submit message'
                            title='submit message'
                            className='btn--primary'
                          >
                            Save Informations{" "}
                            <i className='fa-solid fa-arrow-right' />
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div
              className='faq__content-inner'
              data-aos='fade-up'
              data-aos-duration={1000}
              data-aos-delay={100}
            >
              
            </div>
          </div>
          <div className='col-12 col-xl-4'>
            <div className='cm-details__sidebar'>
              <div
                className='cm-sidebar-widget'
                data-aos='fade-up'
                data-aos-duration={1000}
                data-aos-delay={100}
              >
                <div className='intro'>
                  <h5>search here</h5>
                </div>
                <form action='#' method='post'>
                  <input
                    type='text'
                    name='search-product'
                    id='searchProduct'
                    placeholder='Search Here...'
                    required=''
                  />
                  <button type='submit'>
                    <i className='fa-solid fa-magnifying-glass' />
                  </button>
                </form>
              </div>
              <div
                className='cm-sidebar-widget'
                data-aos='fade-up'
                data-aos-duration={1000}
                data-aos-delay={100}
              >
                <div className='intro'>
                  <h5>Recent Causes</h5>
                </div>
                <div className='cm-sidebar-post'>
                  <div className='single-item'>
                    <div className='thumb'>
                      <Link href='/blog-details'>
                        <img
                          src='assets/images/blog/ph-one.png'
                          alt='Image_inner'
                        />
                      </Link>
                    </div>
                    <div className='content'>
                      <p>
                        <i className='fa-solid fa-calendar-days' />{" "}
                        <span>November 19, 2024</span>
                      </p>
                      <p>
                        <Link href='/blog-details'>
                          Where Innovation Meets Foundation
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className='single-item'>
                    <div className='thumb'>
                      <Link href='/blog-details'>
                        <img
                          src='assets/images/blog/ph-two.png'
                          alt='Image_inner'
                        />
                      </Link>
                    </div>
                    <div className='content'>
                      <p>
                        <i className='fa-solid fa-calendar-days' />{" "}
                        <span>November 19, 2024</span>
                      </p>
                      <p>
                        <Link href='/blog-details'>
                          Where Innovation Meets Foundation
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className='single-item'>
                    <div className='thumb'>
                      <Link href='/blog-details'>
                        <img
                          src='assets/images/blog/three.png'
                          alt='Image_inner'
                        />
                      </Link>
                    </div>
                    <div className='content'>
                      <p>
                        <i className='fa-solid fa-calendar-days' />{" "}
                        <span>November 22, 2024</span>
                      </p>
                      <p>
                        <Link href='/blog-details'>
                          Structures That Stand, Dreams That Soar
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='cm-sidebar-widget'
                data-aos='fade-up'
                data-aos-duration={1000}
                data-aos-delay={100}
              >
                <div className='intro'>
                  <h5>Tags</h5>
                </div>
                <div className='tag-wrapper'>
                  <Link href='/shop'>t-shirt</Link>
                  <Link href='/shop'>Banner Design</Link>
                  <Link href='/shop'>Brochures</Link>
                  <Link href='/shop'>Landing</Link>
                  <Link href='/shop'>Print</Link>
                  <Link href='/shop'>Business Card</Link>
                </div>
              </div>
              <div
                className='cm-sidebar-overview'
                data-aos='fade-up'
                data-aos-duration={1000}
                data-aos-delay={100}
              >
                <div className='cm-logo'>
                  <img src='assets/images/event/logo.png' alt='Image_inner' />
                </div>
                <div className='cm-content'>
                  <p>Small Donations Bigger Impact</p>
                  <h4>Education Health for Every Child</h4>
                </div>
                <div className='cm-cta'>
                  <Link
                    href='/contact-us'
                    aria-label='contact us'
                    title='contact us'
                    className='btn--primary'
                  >
                    Get A Quote <i className='fa-solid fa-arrow-right' />
                  </Link>
                </div>
                <div
                  className='parallax-image-wrap'
                  style={{ overflow: "hidden" }}
                >
                  <div className='parallax-image-inner'>
                    <img
                      src='assets/images/event/overview.png'
                      alt='Image_inner'
                      className='parallax-image'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonateInner;
