import { Helmet } from "react-helmet-async";
import Banner from "../../assets/banner.jpg";
const About = () => {
  return (
    <div>
      <Helmet>
        <title>Gadget Heaven | About</title>
      </Helmet>
      <div>
        <h1 className="text-3xl font-extrabold text-center">About</h1>
        <h1 className="text-2xl font-extrabold text-center">Gadget Heaven</h1>
        <h2 className="text-xl font-bold">Welcome to Gadget Heaven!</h2>
        <p>
          At Gadget Heaven, we believe technology should be accessible,
          reliable, and enjoyable for everyone. We’re passionate about helping
          tech enthusiasts and everyday users alike find the perfect gadgets to
          fit their needs.
        </p>

        <h2 className="text-xl font-bold text-center ">Our Mission</h2>
        <div className="grid grid-cols-2">
          <div className="flex flex-col justify-center bg-purple-200 p-5">
            <h2 className="text-xl font-bold  ">Our Mission</h2>

            <p>
              Gadget Heaven aims to be the ultimate destination for gadget
              lovers by offering comprehensive information on the latest and
              best gadgets across a variety of categories. Whether you're
              looking for a powerful laptop, the latest smartphone, or must-have
              accessories, we’re here to guide you through every choice.
            </p>
          </div>
          <div className="w-full  bg-purple-200">
            <img className="h-72 w-full" src={Banner} alt="" />
          </div>
        </div>

        <h2 className="text-xl font-bold text-center">
          Why Choose Gadget Heaven?
        </h2>
        <h6>We’re committed to providing:</h6>
        <div className=" grid grid-cols-1 gap-4 md:grid-cols-3 mt-2">
          <div className="p-1 border bg-purple-400 rounded-xl shadow-lg ">
            <div className="border rounded-md bg-purple-300 p-4 h-full">
              <span className="font-bold block">
                Accurate and Up-to-Date Information:
              </span>
              Every product listing is reviewed to ensure you get the latest
              details.
            </div>
          </div>

          <div className="p-1 border bg-purple-400 rounded-xl shadow-lg ">
            <div className="border rounded-md bg-purple-300 p-4 h-full">
              <span className="font-bold block">
                Exceptional Customer Support:
              </span>
              Our team is always ready to help you make informed decisions and
              resolve any queries.
            </div>
          </div>

          <div className="p-1 border bg-purple-400 rounded-xl shadow-lg ">
            <div className="border rounded-md bg-purple-300 p-4 h-full">
              <span className="font-bold block">A Personal Touch:</span>
              Gadget Heaven was built by gadget enthusiasts, for gadget
              enthusiasts. Our insights and recommendations are crafted with
              passion.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
