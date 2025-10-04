import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import { AutoPlay } from "@egjs/flicking-plugins";
import Img1 from "../../assets/certificates/Img1.png";
import Img2 from "../../assets/certificates/img2.jpg";

const Certifications = () => {
  const plugins = [
    new AutoPlay({ duration:2000, direction: "NEXT", stopOnHover: true }),
  ];

  return (
    <div id="certifications" className=" pt-20">
      <h3 className="text-3xl pt-4 text-cyan-400 font-semibold my-2  shadow-4xl text-center "> Certifications</h3>
    <div className=" w-[300px] bg-blue-600 shadow-4xl mb-3 shadow-gray-400  flex mx-auto h-[5px] rounded-3xl border-b-1 border-b-amber-50"></div>
    <p className="text-xl text-white text-center my-2 pb-7">Professional certifications and continuous learning achievements</p>

    <div className=" px-10 flex justify-center">
      <div className="w-full max-w-5xl">
        <Flicking
          align="center"
          circular={true}
          moveType="snap"
          bound={true}
          plugins={plugins}
        >
          <div className="w-[500px] flex items-center justify-center px-4">
            <img
              src={Img1}
              alt="cert"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="w-[500px] flex items-center justify-center px-4">
            <img
              src={Img2}
              alt="cert"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="w-[500px] flex items-center justify-center px-4">
            <img
              src={Img1}
              alt="cert"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="w-[500px] flex items-center justify-center px-4">
            <img
              src={Img2}
              alt="cert"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </Flicking>
      </div>
    </div>
    </div>
  );
};

export default Certifications;