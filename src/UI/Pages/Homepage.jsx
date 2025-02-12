import { useEffect, useState } from "react";
import asian from "/images/asian.png";
import nerolac from "/images/nerolac.png";
import berger from "/images/berger.png";
import { Link } from "react-router-dom";
import paint from "/images/paint.gif";

const Homepage = ({ props, theme }) => {
  const [reveal, setReveal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Handle scrolling and resizing
  useEffect(() => {
    const handleScroll = () => {
      setReveal(window.scrollY > 100);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <section className="lora-regular">
        <div
          className="hero min-h-screen "
          style={{
            backgroundColor: theme === "light" ? "white" : "#333",
            color: theme === "light" ? "#333" : "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className="hero-content"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              width: "100%",
            }}
          >
            {/* Text Section */}
            <div
              className="max-w-md"
              style={{
                transform:
                  reveal && !isMobile ? "translateX(-20%)" : "translateX(0)",
                transition: "transform 0.8s ease-in-out",
                textAlign: "left",
              }}
            >
              <h1 className="text-3xl font-bold lg:text-5xl lg:font-bold">
                Welcome
              </h1>
              <h3 className="text-xl font-medium mt-3 lg:text-3xl lg:font-medium">
                NK PAINT'S WORLD
              </h3>
              <h6 className="text-base font-bold mt-3 lg:text-xl lg:font-bold">
                Quality First Cash Next
              </h6>
              <p className="py-6 text-sm lg:text-base text-justify">
                NK Paint's is a local paint shop offering a wide range of
                high-quality paints for residential, commercial, and industrial
                purposes. Known for its expert advice and personalized service,
                NK Paint's provides customers with premium brands, custom color
                matching, and all the tools needed for any painting project.
              </p>
              <Link to="/products">
                <button className="btn btn-primary">View Products</button>
              </Link>
            </div>

            <div
              className="video-section transition-opacity duration-500 ease-in-out"
              style={{
                transition: "opacity 0.5s ease-in-out",
                marginLeft: "50px",
                width: "100%",
                maxWidth: "700px",
              }}
            >
              <img
                src={paint}
                alt="Video"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </section>
      <hr />

      <section
        className="lora-regular lg:mt-10 mt-5 lg:mb-10 mb-5"
        style={{
          backgroundColor: theme === "light" ? "white" : "#333",
          color: theme === "light" ? "black" : "#fff",
        }}
      >
        <h1 className="text-2xl font-bold lg:text-3xl lg:font-bold text-center">
          Available Brands
        </h1>
        <div className="carousel w-screen lg:w-11/12 lg:ml-16 mt-5 lg:mt-10 md:w-11/12">
          <div id="item1" className="carousel-item w-full">
            <img
              src="https://nipponpaint.co.in/wp-content/uploads/2024/09/our-product-1-2-1024x376.png"
              className="w-full"
            />
          </div>
          <div id="item2" className="carousel-item w-full">
            <img src={nerolac} className="w-full" />
          </div>
          <div id="item3" className="carousel-item w-full">
            <img src={asian} className="w-full" />
          </div>
          <div id="item4" className="carousel-item w-full">
            <img src={berger} className="w-full" />
          </div>
        </div>
        <div className="flex w-full justify-center gap-2 py-2">
          <a href="#item1" className="btn btn-xs">
            1
          </a>
          <a href="#item2" className="btn btn-xs">
            2
          </a>
          <a href="#item3" className="btn btn-xs">
            3
          </a>
          <a href="#item4" className="btn btn-xs">
            4
          </a>
        </div>
      </section>
      <hr />

      <section
        className="lora-regular mt-10 w-full"
        style={{
          backgroundColor: theme === "light" ? "white" : "#333",
          color: theme === "light" ? "black" : "#fff",
        }}
      >
        <h1 className="text-2xl font-bold lg:text-3xl lg:font-bold text-center">
          Paints Type
        </h1>
        <div className="flex flex-col lg:flex-row lg:justify-between lg:space-x-5 lg:mt-10 lg:mb-10 lg:ml-10 lg:mr-10 ml-3 mr-3 mb-5 mt-3">
          {props.map((paint) => (
            <div
              key={paint.id}
              className="card sm:w-full lg:w-96 shadow-xl mb-10"
            >
              <div className="card-body">
                <h2 className="card-title">{paint.title}</h2>
                <p className="text-justify">{paint.description}</p>
              </div>
              <figure>
                <img src={paint.image} alt={paint.title} />
              </figure>
            </div>
          ))}
        </div>
      </section>
      {theme === "dark" ? <hr /> : null}
    </div>
  );
};

export default Homepage;
