const FaqOne = () => {
  return (
    <section className='faq'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-12 col-lg-8 col-xl-6'>
            <div className='faq__content'>
              <div
                className='section__content'
                data-aos='fade-up'
                data-aos-duration={1000}
              >
                <span className='sub-title'>
                  <i className='icon-donation' />
                  Start donating poor people
                </span>
                <h2 className='title-animation_inner'>
                  Frequently <span>Asked</span>
                  Questions
                </h2>
              </div>
              <div
                className='faq__content-inner cta'
                data-aos='fade-up'
                data-aos-duration={1000}
                data-aos-delay={100}
              >
                <div className='accordion' id='accordion'>
                  <div className='accordion-item'>
                    <h6 className='accordion-header' id='headingOne'>
                      <button
                        className='accordion-button'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapseOne'
                        aria-expanded='true'
                        aria-controls='collapseOne'
                      >
                        What is Navgoonj?
                      </button>
                    </h6>
                    <div
                      id='collapseOne'
                      className='accordion-collapse collapse show'
                      aria-labelledby='headingOne'
                      data-bs-parent='#accordion'
                    >
                      <div className='accordion-body'>
                        <p>
                         Navgoonj is a non-profit organization dedicated to creating positive social change through education, community development, and empowerment initiatives. We aim to make a meaningful difference in the lives of underprivileged communities.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item'>
                    <h6 className='accordion-header' id='headingTwo'>
                      <button
                        className='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapseTwo'
                        aria-expanded='false'
                        aria-controls='collapseTwo'
                      >
                       Are my donations tax-exempt?
                      </button>
                    </h6>
                    <div
                      id='collapseTwo'
                      className='accordion-collapse collapse'
                      aria-labelledby='headingTwo'
                      data-bs-parent='#accordion'
                    >
                      <div className='accordion-body'>
                        <p>
                          Yes! All donations made to Navgoonj are eligible for tax exemption under Section 80G of the Income Tax Act. You will receive a donation receipt after payment.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item'>
                    <h6 className='accordion-header' id='headingThree'>
                      <button
                        className='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapseThree'
                        aria-expanded='false'
                        aria-controls='collapseThree'
                      >
                        How can I donate to Navgoonj?
                      </button>
                    </h6>
                    <div
                      id='collapseThree'
                      className='accordion-collapse collapse'
                      aria-labelledby='headingThree'
                      data-bs-parent='#accordion'
                    >
                      <div className='accordion-body'>
                        <p>
                          You can donate easily through our Donate page. We accept online payments, bank transfers, and other secure methods. Every contribution, big or small, helps us continue our mission.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item'>
                    <h6 className='accordion-header' id='headingFour'>
                      <button
                        className='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapseFour'
                        aria-expanded='false'
                        aria-controls='collapseFour'
                      >
                       Can I volunteer with Navgoonj?
                      </button>
                    </h6>
                    <div
                      id='collapseFour'
                      className='accordion-collapse collapse'
                      aria-labelledby='headingFour'
                      data-bs-parent='#accordion'
                    >
                      <div className='accordion-body'>
                        <p>
                          Absolutely! We welcome passionate individuals to join our volunteering programs. You can register as a volunteer , and our team will get in touch with you.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-12 col-lg-4 col-xl-5 offset-xl-1'>
            <div className='faq__thumb d-none d-lg-block'>
              <div className='faq__thumb-inner'>
                <div
                  className='thumb-lg'
                  data-aos='fade-up'
                  data-aos-duration={1000}
                  data-aos-delay={100}
                >
                  <img src='assets/images/faq/thumb-lg.png' alt='Image_inner' />
                </div>
                <div
                  className='thumb-sm'
                  data-aos='fade-left'
                  data-aos-duration={1000}
                  data-aos-delay={300}
                >
                  <img src='assets/images/faq/thumb-sm.png' alt='Image_inner' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='shape d-none d-lg-block'>
        <img src='assets/images/faq/shape.png' alt='Image_inner' />
      </div>
    </section>
  );
};

export default FaqOne;
