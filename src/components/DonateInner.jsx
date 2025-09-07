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
                          <h5>Account Name:</h5>
                         
                          <div className='made-amount'>
                            <span
                              className={`donation-amount ${
                                amount === 20 && "active"
                              }`}
                              onClick={() => setAmount(20)}
                            >
                              NAV GOONJ
                            </span>
                            
                            
                           
                              
                            
                            
                          </div>
                        </div>
                        <div className='donation-form__single'>
                          <h5>Account Number:</h5>
                         
                          <div className='made-amount'>
                            <span
                              className={`donation-amount ${
                                amount === 20 && "active"
                              }`}
                              onClick={() => setAmount(20)}
                            >
                              769502010004223
                            </span>
                            
                            
                           
                              
                            
                            
                          </div>
                        </div>
                        <div className='donation-form__single'>
                          <h5>IFS Code:</h5>
                         
                          <div className='made-amount'>
                            <span
                              className={`donation-amount ${
                                amount === 20 && "active"
                              }`}
                              onClick={() => setAmount(20)}
                            >
                              UBIN0576956
                            </span>
                            
                            
                           
                              
                            
                            
                          </div>
                        </div>
                        
                        <div className='cta'>
                         
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
                  <h5>Tags</h5>
                </div>
                <div className='tag-wrapper'>
                  <Link href='/shop'>Help</Link>
                  <Link href='/shop'>Support </Link>
                  <Link href='/shop'>Education</Link>
                  <Link href='/shop'>Environment</Link>
                  <Link href='/shop'>Health</Link>
                  <Link href='/shop'> Care</Link>
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
