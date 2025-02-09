import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="flex flex-wrap">
        <div className="w-full sm:w-8/12 mb-10">
          <div className="container mx-auto h-full sm:p-10">
            <nav className="flex px-4 justify-between items-center">
              <div className="text-4xl font-bold">
                LEXORA
                <span className="text-amber-600" style={{ color: "#AF8E4D" }}>
                  .
                </span>
              </div>
              <div></div>
            </nav>
            <header className="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
              <div className="w-full">
                <h1 className="text-4xl lg:text-6xl font-bold">
                  Find your{" "}
                  <span className="text-green-700" style={{ color: "#AF8E4D" }}>
                    Legal
                  </span>{" "}
                  Clarity with Lexora
                </h1>
                <div className="w-20 h-2 bg-[#AF8E4D] my-4"></div>
                <p className="text-xl mb-10">
                  Navigating legal matters can be overwhelming, but Lexora makes
                  it simple. Whether you need advice on contracts, business law,
                  or personal legal matters, our expert guidance is here to
                  help.
                  <br />
                  Get the clarity and confidence you need—Lexora is your trusted
                  legal partner.
                </p>
                <Link to="/learn-more">
                  <button className="bg-[#AF8E4D] hover:bg-[#8A6F3B] text-white font-bold py-2 px-4 rounded-full animate-pulse">
                    Learn More
                  </button>
                </Link>
              </div>
            </header>
          </div>
        </div>
        <img
          src="https://img.freepik.com/free-photo/view-3d-justice-scales_23-2151228088.jpg?t=st=1739012901~exp=1739016501~hmac=65b32b45a94996c35e7a8a3304825993bf0d4e3ce044d7a810bd567bead8fb2c&w=1060"
          alt="Justice Scales"
          className="w-full h-48 object-cover sm:h-screen sm:w-4/12"
        />
      </div>
      <hr />

      <div className="w-full lg:h-screen h-full m-auto flex items-center justify-center py-20 bg-gray-50">
        <div className="w-full h-full flex flex-col justify-center items-center sm:px-4 px-2">
          <div className="lg:w-[90%] w-full mx-auto flex flex-col lg:gap-6 lg:flex-row items-center justify-center">
            <div className="relative">
              {/* Side Img 1 */}
              <img
                className="absolute z-20 lg:left-[2rem] -top-4 left-[1rem] lg:w-[8rem] lg:h-[8rem] sm:w-[6rem] sm:h-[6rem] w-[3rem] h-[3rem] rounded-full"
                src="https://img.freepik.com/free-photo/view-3d-scales-justice-lawyer-s-day_23-2151023430.jpg?t=st=1739012965~exp=1739016565~hmac=a31fec9703c7ee47aa0b1411f49aeb9a986f6dd10790febc0360f43b6d339e69&w=740"
                alt="Side Image"
              />

              {/* Side Img 2 */}
              <img
                className="absolute z-20 lg:top-[12rem] sm:top-[11rem] top-[5rem] sm:-left-[3rem] -left-[2rem] lg:w-[8rem] lg:h-[8rem] sm:w-[6rem] sm:h-[6rem] w-[3rem] h-[3rem] rounded-full"
                src="https://img.freepik.com/free-photo/view-3d-gavel-lawyer-s-day-celebration_23-2151023333.jpg?t=st=1739013028~exp=1739016628~hmac=5e639fe49c51af100f9c952caf47a5dab278481cc9b9bf7fa97f9af8cde68648&w=900"
                alt="Side Image 2"
              />

              {/* Side Img 3 */}
              <img
                className="absolute z-20 lg:top-[23rem] sm:top-[20.5rem] top-[10.5rem] left-[2rem] lg:w-[8rem] lg:h-[8rem] sm:w-[6rem] sm:h-[6rem] w-[3rem] h-[3rem] rounded-full"
                src="https://img.freepik.com/free-photo/view-3d-scales-justice-lawyer-s-day-celebration_23-2151023337.jpg?t=st=1739013195~exp=1739016795~hmac=f66193725fdac8c6dd979d2b99137390240c99db739ab7c304aeed2742afd8da&w=900"
                alt="Side Image 3"
              />

              {/* Main Img */}
              <img
                className="rounded-full relative object-cover right-0 lg:w-[30rem] lg:h-[30rem] sm:w-[25rem] sm:h-[25rem] w-[12rem] h-[12rem] outline sm:outline-offset-[.77em] outline-offset-[.37em] outline-[#AF8E4D] focus:outline-[#8A6F3B]"
                src="https://img.freepik.com/free-photo/mature-lawyer-with-clients-meeting_23-2147898414.jpg?t=st=1739012762~exp=1739016362~hmac=1d2b4d6cbfe05c01f41bd93008a6b8cecb50aa539808a090c7059f0d24b60e0f&w=900"
                alt="About us"
              />
            </div>

            <div className="lg:w-[60%] p-4 w-full h-full shadow-xl shadow-[0_4px_6px_rgba(175,142,77,0.4)] flex flex-col justify-center items-center sm:px-6 px-4 rounded-xl">
              <h2
                className="text-4xl text-center text-green-600 dark:text-green-400 font-bold px-4 py-1 md:mt-0 mt-10"
                style={{ color: "#AF8E4D" }}
              >
                About Us
              </h2>
              <p className="md:text-3xl text-2xl text-center text-gray-800 dark:text-gray-500 font-bold my-5">
                We are LEXORA
              </p>
              <p className="md:text-xl sm:text-lg text-base mt-2 text-justify sm:px-2 dark:text-gray-500">
                At Lexora, we are committed to making legal guidance accessible,
                clear, and effective. Whether you’re an individual or a
                business, navigating legal matters can be complex—but you don’t
                have to do it alone.
                <br />
                Our team of experienced legal professionals provides expert
                advice on contracts, business law, personal legal matters, and
                more. We simplify the legal process, ensuring you have the
                knowledge and confidence to make informed decisions.
              </p>
              <br />
              {/* button */}
              <button className="relative inline-flex items-center gap-2 px-6 py-3 font-semibold text-yellow-50 bg-gradient-to-tr from-yellow-900/30 via-yellow-900/70 to-yellow-900/30 ring-4 ring-yellow-900/20 rounded-full overflow-hidden hover:opacity-90 transition-opacity before:absolute before:top-4 before:left-1/2 before:-translate-x-1/2 before:w-[100px] before:h-[100px] before:rounded-full before:bg-gradient-to-b before:from-yellow-50/10 before:blur-xl">
                Start Here
              </button>
            </div>
          </div>
        </div>
      </div>
      <h1 className="provide">
        <span style={{ color: "#AF8E4D" }}>Consultations</span> we provide
      </h1>
      <div className="cardss grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="w-80 p-4 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
          <img
            className="w-full h-40 object-cover rounded-t-lg"
            alt="Card Image"
            src="https://img.freepik.com/free-photo/businesspeople-having-discussion-office_107420-84850.jpg?t=st=1739014650~exp=1739018250~hmac=d2b7a928a1c2b8c089e93b048468d6a0f4c60055f2b7ca4666803129d7d7bb2f&w=900"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold">Business & Corporate Law</h2>
            <p className="text-gray-600">
              At Lexora, we offer comprehensive legal services for businesses of
              all sizes
            </p>
            <div className="flex justify-between items-center mt-4">
              <button className="bg-[#AF8E4D] hover:bg-[#8A6F3B] text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400">
                Learn More
              </button>
            </div>
          </div>
        </div>

        <div className="w-80 p-4 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
          <img
            className="w-full h-40 object-cover rounded-t-lg"
            alt="Card Image"
            src="https://img.freepik.com/free-photo/businessman-signing-important-contract-papers_114579-12133.jpg?t=st=1739014611~exp=1739018211~hmac=4fcbe9c5e31d7d46430cd22bd126fac8a5d7cc6661be85abdf82c208256781a8&w=900"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold">Personal Legal Matters</h2>
            <p className="text-gray-600">
              At Lexora, we understand that personal legal matters can be both
              sensitive and complex.
            </p>
            <div className="flex justify-between items-center mt-4">
              <button className="bg-[#AF8E4D] hover:bg-[#8A6F3B] text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400">
                Learn More
              </button>
            </div>
          </div>
        </div>

        <div className="w-80 p-4 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
          <img
            className="w-full h-40 object-cover rounded-t-lg"
            alt="Card Image"
            src="https://img.freepik.com/free-photo/cropped-view-businesswomen-reading-document_74855-4169.jpg?t=st=1739014708~exp=1739018308~hmac=92b7834f0a90410a2773f60d6d010cc5ce5acf95428e6078bad6e2814142ad23&w=900"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold">
              Litigation & Dispute Resolution
            </h2>
            <p className="text-gray-600">
              At Lexora, we provide expert legal representation for individuals
              and businesses facing disputes.
            </p>
            <div className="flex justify-between items-center mt-4">
              <button className="bg-[#AF8E4D] hover:bg-[#8A6F3B] text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400">
                Learn More
              </button>
            </div>
          </div>
        </div>

        <div className="w-80 p-4 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
          <img
            className="w-full h-40 object-cover rounded-t-lg"
            alt="Card Image"
            src="https://img.freepik.com/free-photo/real-estate-agents-working-close-up-office-backgrounds_1268-29321.jpg?t=st=1739014757~exp=1739018357~hmac=2d242dc9ace0db4289d3ffb4845aea7e3f51769ee7014ceb45d87b6a7ed70f41&w=900"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold">
              Real Estate & Property Law
            </h2>
            <p className="text-gray-600">
              At Lexora, we offer expert legal services for all aspects of real
              estate and property law.
            </p>
            <div className="flex justify-between items-center mt-4">
              <button className="bg-[#AF8E4D] hover:bg-[#8A6F3B] text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400">
                Learn More
              </button>
            </div>
          </div>
        </div>

        <div className="w-80 p-4 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
          <img
            className="w-full h-40 object-cover rounded-t-lg"
            alt="Card Image"
            src="https://img.freepik.com/free-photo/close-up-busy-businesswoman_1098-1687.jpg?t=st=1739014786~exp=1739018386~hmac=36682ac61a041a7f82b526a8c9fa298f90d21726df10878620b0d9382a2181b2&w=900"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold">Financial & Tax Law</h2>
            <p className="text-gray-600">
              At Lexora, we provide expert legal guidance to help individuals
              and businesses navigate the complexities of financial and tax
              laws.
            </p>
            <div className="flex justify-between items-center mt-4">
              <button className="bg-[#AF8E4D] hover:bg-[#8A6F3B] text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400">
                Learn More
              </button>
            </div>
          </div>
        </div>

        <div className="w-80 p-4 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
          <img
            className="w-full h-40 object-cover rounded-t-lg"
            alt="Card Image"
            src="https://img.freepik.com/free-photo/portrait-woman-holding-family-drawing_23-2148548543.jpg?t=st=1739014813~exp=1739018413~hmac=f77931d8f3763ba32c7759a416166f2eebcc94531b9265576bb2f4e017d40a6f&w=826"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold">Family Law</h2>
            <p className="text-gray-600">
              At Lexora, we understand that family legal matters can be
              emotional and challenging.
            </p>
            <div className="flex justify-between items-center mt-4">
              <button className="bg-[#AF8E4D] hover:bg-[#8A6F3B] text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <hr />

      <div className="bg-white">
        <section
          id="features"
          className="relative block px-6 py-10 md:py-20 md:px-10"
        >
          <div className="relative mx-auto max-w-5xl text-center">
            <span className="text-gray-800 my-3 flex items-center justify-center font-medium uppercase tracking-wider">
              Why choose us
            </span>
            <h2
              className="block w-full bg-gradient-to-b from-black to-gray-800 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl"
              style={{ fontFamily: "'Times New Roman', Times, serif" }}
            >
              Build Your Legal Confidence with Lexora
            </h2>
            <p className="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-gray-800">
              Our expert legal services empower you to make informed decisions
              with ease. Whether you're navigating complex business contracts or
              resolving personal legal matters – our intuitive consultations and
              customized advice ensure you get the support you need—without the
              legal jargon.
            </p>
          </div>

          <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-md border border-neutral-800 p-8 text-center shadow">
              <div
                className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border"
                style={{
                  backgroundImage:
                    "linear-gradient(rgb(175, 142, 77) 0%, rgb(175, 142, 77) 100%)",
                  borderColor: "rgb(175, 142, 77)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-color-swatch"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M19 3h-4a2 2 0 0 0 -2 2v12a4 4 0 0 0 8 0v-12a2 2 0 0 0 -2 -2"></path>
                  <path d="M13 7.35l-2 -2a2 2 0 0 0 -2.828 0l-2.828 2.828a2 2 0 0 0 0 2.828l9 9"></path>
                  <path d="M7.3 13h-2.3a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h12"></path>
                  <line x1="17" y1="17" x2="17" y2="17.01"></line>
                </svg>
              </div>
              <h3 className="mt-6 text-gray-800">Customizable</h3>
              <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-800">
                Tailor your legal experience with Lexora to fit your specific
                needs. Whether it's choosing the right service or customizing
                your consultation to address your unique situation
              </p>
            </div>

            <div className="rounded-md border border-neutral-800 p-8 text-center shadow">
              <div
                className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border"
                style={{
                  backgroundImage:
                    "linear-gradient(rgb(175, 142, 77) 0%, rgb(175, 142, 77) 100%)",
                  borderColor: "rgb(175, 142, 77)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-bolt"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <polyline points="13 3 13 10 19 10 11 21 11 14 5 14 13 3"></polyline>
                </svg>
              </div>
              <h3 className="mt-6 text-gray-800">
                Fast, Reliable Legal Support
              </h3>
              <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-800">
                At Lexora, we understand that legal matters can be
                time-sensitive. That's why we ensure our services are delivered
                with speed and efficiency—providing quick
              </p>
            </div>

            <div className="rounded-md border border-neutral-800 p-8 text-center shadow">
              <div
                className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border"
                style={{
                  backgroundImage:
                    "linear-gradient(rgb(175, 142, 77) 0%, rgb(175, 142, 77) 100%)",
                  borderColor: "rgb(175, 142, 77)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-tools"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4"></path>
                  <line x1="14.5" y1="5.5" x2="18.5" y2="9.5"></line>
                  <polyline points="12 8 7 3 3 7 8 12"></polyline>
                  <line x1="7" y1="8" x2="5.5" y2="9.5"></line>
                  <polyline points="16 12 21 17 17 21 12 16"></polyline>
                  <line x1="16" y1="17" x2="14.5" y2="18.5"></line>
                </svg>
              </div>
              <h3 className="mt-6 text-gray-800">
                Fully Featured Legal Support
              </h3>
              <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-800">
                At Lexora, we provide everything you need to navigate your legal
                journey. From expert advice to personalized consultations
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className="bg-gray-50">
        <div className="re-sip-membership-benefits max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="re-sip-membership-benefits__wrapper">
            <h2
              className="text-3xl font-bold text-primary mb-12 text-center sm:text-left"
              style={{ color: "#AF8E4D" }}
            >
              What's included:
            </h2>
            <div className="grid gap-8 md:gap-12">
              {/* Item 1 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3">
                    <img
                      className="w-full h-64 md:h-full object-cover"
                      src="https://ww2-secure.justanswer.com/static/sip/btc/membership-benefits/law_tnt_1_v1.jpg"
                      alt="1:1 access to Lawyers"
                    />
                  </div>
                  <div className="md:w-2/3 p-6 md:p-8">
                    <h3
                      className="text-xl font-bold text-primary mb-4"
                      style={{ color: "#AF8E4D" }}
                    >
                      1:1 access to Lawyers
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Connect with highly rated, verified attorneys. Whether you
                      need answers about immigration issues, bankruptcy, or
                      family disputes, your membership can save you hundreds
                      every time you use it.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 2 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3">
                    <img
                      className="w-full h-64 md:h-full object-cover"
                      src="https://ww2-secure.justanswer.com/static/sip/btc/membership-benefits/law_tnt_2_v1.jpg"
                      alt="Streamlined legal document preparation"
                    />
                  </div>
                  <div className="md:w-2/3 p-6 md:p-8">
                    <h3
                      className="text-xl font-bold text-primary mb-4"
                      style={{ color: "#AF8E4D" }}
                    >
                      Streamlined legal document preparation
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Access tools for drafting legally sound documents by using
                      our third-party provider, Legal Access Enhanced, to create
                      your will, power of attorney, healthcare directive, lease
                      agreements, business contracts, and other important
                      documents.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 3 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3">
                    <img
                      className="w-full h-64 md:h-full object-cover"
                      src="https://ww2-secure.justanswer.com/static/sip/btc/membership-benefits/law_tnt_3_v1.jpg"
                      alt="Talk to a lawyer over the phone"
                    />
                  </div>
                  <div className="md:w-2/3 p-6 md:p-8">
                    <h3
                      className="text-xl font-bold text-primary mb-4"
                      style={{ color: "#AF8E4D" }}
                    >
                      Talk to a lawyer over chat or video call
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Get two free phone calls with a lawyer when you download
                      the JustAnswer app to your mobile device. Look for us in
                      the App Store and Google Play.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 4 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3">
                    <img
                      className="w-full h-64 md:h-full object-cover"
                      src="https://ww2-secure.justanswer.com/static/sip/btc/membership-benefits/law_tnt_4_v1.jpg"
                      alt="Extended legal services"
                    />
                  </div>
                  <div className="md:w-2/3 p-6 md:p-8">
                    <h3
                      className="text-xl font-bold text-primary mb-4"
                      style={{ color: "#AF8E4D" }}
                    >
                      Extended legal services
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Members can be referred to local attorneys who can assist
                      with your requested area of the field, providing both
                      complimentary and discounted services, including a no-cost
                      initial meeting through our third-party providers Legal
                      Access Enhanced and Legal Services.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 5 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3">
                    <img
                      className="w-full h-64 md:h-full object-cover"
                      src="https://ww2-secure.justanswer.com/static/sip/btc/membership-benefits/law_5_v2.jpg"
                      alt="Save monthly. Cancel anytime."
                    />
                  </div>
                  <div className="md:w-2/3 p-6 md:p-8">
                    <h3
                      className="text-xl font-bold text-primary mb-4"
                      style={{ color: "#AF8E4D" }}
                    >
                      Save monthly. Cancel anytime.
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Legal fees can add up quickly, especially when you're
                      charged by the hour. Every lawyer's answer you get on
                      JustAnswer can save you hundreds.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="FAQ">FAQ</div>
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-center items-center gap-x-16 gap-y-5 xl:gap-28 lg:flex-row lg:justify-between max-lg:max-w-2xl mx-auto max-w-full">
            <div className="w-full lg:w-1/2">
              <img
                src="https://images.pexels.com/photos/4427620/pexels-photo-4427620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="FAQ tailwind section"
                className="w-full rounded-xl object-cover"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <div className="lg:max-w-xl">
                <div className="mb-6 lg:mb-16">
                  <h2 className="text-4xl text-center font-bold text-gray-900 leading-[3.25rem] mb-5 lg:text-left">
                    Looking for answers?
                  </h2>
                </div>
                <div
                  className="accordion-group"
                  data-accordion="default-accordion"
                >
                  {/* Accordion Item 1 */}
                  <div
                    className="accordion pb-8 border-b border-solid border-gray-200 active"
                    id="basic-heading-one-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group inline-flex items-center justify-between text-xl font-normal leading-8 text-gray-600 w-full transition duration-500 hover:text-[#AF8E4D] accordion-active:text-indigo-600 accordion-active:font-medium always-open"
                      aria-controls="basic-collapse-one-with-arrow-always-open"
                    >
                      <h5>How to create an account?</h5>
                      <svg
                        className="text-gray-900 transition duration-500 group-hover:text-[#AF8E4D] accordion-active:text-indigo-600 accordion-active:rotate-180"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    <div
                      id="basic-collapse-one-with-arrow-always-open"
                      className="accordion-content w-full px-0 overflow-hidden pr-4 active"
                      style={{ maxHeight: "100px" }}
                      aria-labelledby="basic-heading-one-with-arrow-always-open"
                    >
                      <p className="text-base font-normal text-gray-600">
                        To create an account, find the 'Sign up' or 'Create
                        account' button, fill out the registration form with
                        your personal information, and click 'Create account' or
                        'Sign up.' Verify your email address if needed, and then
                        log in to start using the platform.
                      </p>
                    </div>
                  </div>
                  {/* Accordion Item 2 */}
                  <div
                    className="accordion py-8 border-b border-solid border-gray-200"
                    id="basic-heading-two-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group inline-flex items-center justify-between font-normal text-xl leading-8 text-gray-600 w-full transition duration-500 hover:text-[#AF8E4D] accordion-active:text-indigo-600 accordion-active:font-medium"
                      aria-controls="basic-collapse-two-with-arrow-always-open"
                    >
                      <h5>Have any trust issue?</h5>
                      <svg
                        className="text-gray-900 transition duration-500 group-hover:text-[#AF8E4D] accordion-active:text-indigo-600 accordion-active:rotate-180"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    <div
                      id="basic-collapse-two-with-arrow-always-open"
                      className="accordion-content w-full px-0 overflow-hidden pr-4"
                      aria-labelledby="basic-heading-two-with-arrow-always-open"
                    >
                      <p className="text-base text-gray-500 font-normal">
                        Our focus on providing robust and user-friendly content
                        management capabilities ensures that you can manage your
                        content with confidence, and achieve your content
                        marketing goals with ease.
                      </p>
                    </div>
                  </div>
                  {/* Accordion Item 3 */}
                  <div
                    className="accordion py-8 border-b border-solid border-gray-200"
                    id="basic-heading-three-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group inline-flex items-center justify-between text-xl font-normal leading-8 text-gray-600 w-full transition duration-500 hover:text-[#AF8E4D] accordion-active:font-medium accordion-active:text-indigo-600"
                      aria-controls="basic-collapse-three-with-arrow-always-open"
                    >
                      <h5>How can I reset my password?</h5>
                      <svg
                        className="text-gray-900 transition duration-500 group-hover:text-[#AF8E4D] accordion-active:text-indigo-600 accordion-active:rotate-180"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    <div
                      id="basic-collapse-three-with-arrow-always-open"
                      className="accordion-content w-full px-0 overflow-hidden pr-4"
                      aria-labelledby="basic-heading-three-with-arrow-always-open"
                    >
                      <p className="text-base text-gray-500 font-normal">
                        Our focus on providing robust and user-friendly content
                        management capabilities ensures that you can manage your
                        content with confidence, and achieve your content
                        marketing goals with ease.
                      </p>
                    </div>
                  </div>
                  {/* Accordion Item 4 */}
                  <div
                    className="accordion py-8"
                    id="basic-heading-four-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group inline-flex items-center justify-between text-xl font-normal leading-8 text-gray-600 w-full transition duration-500 hover:text-[#AF8E4D] accordion-active:font-medium accordion-active:text-indigo-600"
                      aria-controls="basic-collapse-four-with-arrow-always-open"
                    >
                      <h5>What is the payment process?</h5>
                      <svg
                        className="text-gray-900 transition duration-500 group-hover:text-[#AF8E4D] accordion-active:text-indigo-600 accordion-active:rotate-180"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    <div
                      id="basic-collapse-four-with-arrow-always-open"
                      className="accordion-content w-full px-0 overflow-hidden pr-4"
                      aria-labelledby="basic-heading-four-with-arrow-always-open"
                    >
                      <p className="text-base text-gray-500 font-normal">
                        Our focus on providing robust and user-friendly content
                        management capabilities ensures that you can manage your
                        content with confidence, and achieve your content
                        marketing goals with ease.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <button className="Btn">
        <svg height="1.2em" className="arrow" viewBox="0 0 512 512">
          <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"></path>
        </svg>
        <p className="text">Back to Top</p>
      </button>
    </div>
  );
}

export default Home;
