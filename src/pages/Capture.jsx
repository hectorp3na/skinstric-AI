import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Capture = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [imageData, setImageData] = useState(null);
  const [preview, setPreview] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const startCamera = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch((err) => {
        console.error("Failed to access camera:", err);
      });
  };

  const stopCamera = () => {
    if (videoRef.current?.srcObject) {
      videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
    }
  };

  useEffect(() => {
    startCamera();
    return stopCamera;
  }, []);

  const takePicture = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    if (video && canvas) {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      const ctx = canvas.getContext("2d");
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

      const image = canvas.toDataURL("image/png");
      setImageData(image);
      setPreview(true);
      stopCamera();
    }
  };

  const handleConfirm = async () => {
    if (!imageData) return;
    setLoading(true);

    try {
      const response = await fetch(
        "https://us-central1-api-skinstric-ai.cloudfunctions.net/skinstricPhaseTwo",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ image: imageData }),
        }
      );

      const apiResult = await response.json(); 
      console.log("API Result:", apiResult);
    navigate("/select", {
      state: {
        imageBase64: imageData, 
        apiResult: apiResult.data, 
      },
    });
    } catch (error) {
      console.error("API Error:", error);
      alert("There was an issue analyzing the image. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div
      className="relative w-screen h-screen overflow-hidden"
      style={{
        backgroundColor: preview ? "transparent" : "black",
        backgroundImage: preview ? `url(${imageData})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      {!preview && (
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
      <canvas ref={canvasRef} className="hidden" />

      <div className="absolute md:bottom-25 bottom-60 left-8 z-30">
        <a href="/result">
          <div>
            <div className="relative w-12 h-12 flex items-center justify-center border border-[#FCFCFC] rotate-45 scale-[1] sm:hidden">
              <span className="rotate-[-45deg] text-xs font-semibold sm:hidden text-[#FCFCFC]">
                BACK
              </span>
            </div>
            <div className="group hidden sm:flex flex-row relative justify-center items-center">
              <div className="w-12 h-12 border border-[#FCFCFC] rotate-45 scale-[0.85] group-hover:scale-[0.92] ease duration-300"></div>
              <span className="absolute left-[15px] bottom-[13px] scale-[0.9] rotate-180 text-[#FCFCFC] group-hover:scale-[0.92] ease duration-300">
                ▶
              </span>
              <span className="text-sm font-semibold ml-6 text-[#FCFCFC]">
                BACK
              </span>
            </div>
          </div>
        </a>
      </div>

      {!preview && (
        <div className="absolute left-1/2 top-[75%] transform -translate-x-1/2 -translate-y-1/2 text-center z-20">
          <p className="text-sm mb-2 font-normal leading-6 text-[#FCFCFC]">
            TO GET BETTER RESULTS MAKE SURE TO HAVE
          </p>
          <div className="flex justify-center space-x-8 text-xs leading-6 text-[#FCFCFC]">
            <p>◇ NEUTRAL EXPRESSION</p>
            <p>◇ FRONTAL POSE</p>
            <p>◇ ADEQUATE LIGHTING</p>
          </div>
        </div>
      )}

      {!preview && (
        <div
          onClick={takePicture}
          className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 flex items-center space-x-3 cursor-pointer"
        >
          <div className="font-semibold text-sm tracking-tight leading-[14px] text-[#FCFCFC] hidden sm:block">
            TAKE PICTURE
          </div>

          <svg
            width="62"
            height="62"
            viewBox="0 0 62 62"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="31.0009" cy="31" r="27.5556" fill="#FCFCFC" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M27.0729 20.4013C26.598 20.5719 25.2004 21.7484 24.6738 22.4205C24.5209 22.6159 24.2655 22.6593 23.2694 22.6593C20.4047 22.6593 18.8323 23.4755 17.9123 25.4401L17.5215 26.2747V32.2093C17.5215 37.4902 17.5475 38.2079 17.7579 38.7253C18.3356 40.1466 19.4166 41.1454 20.8235 41.5577C21.8482 41.8579 40.1513 41.8579 41.176 41.5577C42.1719 41.2658 43.0658 40.6275 43.6212 39.8118C44.4826 38.5465 44.478 38.5872 44.478 32.1411V26.2747L44.0764 25.4164C43.5904 24.3777 42.5037 23.3395 41.5454 22.9986C41.1228 22.8482 40.2845 22.738 39.2249 22.6934L37.5661 22.6237L36.5549 21.6524C35.9987 21.1182 35.3767 20.589 35.1725 20.4764C34.6338 20.1794 27.8648 20.1165 27.0729 20.4013ZM34.3979 21.845C34.604 21.9223 35.2661 22.4596 35.8689 23.0387L36.965 24.0918L38.7862 24.1701C40.7635 24.2551 41.3361 24.4228 42.0482 25.1255C42.9111 25.9771 42.9006 25.8831 42.858 32.3977L42.8191 38.3254L42.3983 38.9168C42.1668 39.2421 41.7002 39.6617 41.3616 39.8493L40.7456 40.1904H30.9997H21.2539L20.6379 39.8493C20.2992 39.6617 19.8327 39.2421 19.6011 38.9168L19.1803 38.3254L19.1415 32.3977C19.0988 25.8585 19.0845 25.9826 19.9752 25.1232C20.7199 24.4046 21.2282 24.2554 23.2206 24.1701L25.0491 24.0918L26.0545 23.1098C27.537 21.6617 27.3823 21.7061 30.9562 21.7051C32.7299 21.7047 34.181 21.7636 34.3979 21.845ZM29.3554 25.868C25.9995 26.7979 23.9826 30.2039 24.8474 33.4808C25.1502 34.628 25.5468 35.3075 26.4639 36.2499C28.4025 38.2424 31.3864 38.7558 33.8513 37.5211C34.8388 37.0266 36.186 35.7328 36.6514 34.8325C37.7358 32.7348 37.5167 30.0836 36.105 28.2201C35.4172 27.3121 34.2736 26.4497 33.2481 26.0654C32.2063 25.6749 30.3851 25.5825 29.3554 25.868ZM38.2787 26.1831C38.0111 26.4749 37.9786 27.0365 38.2158 27.2706C38.3177 27.3711 38.8162 27.4343 39.5076 27.4343C40.4229 27.4343 40.6764 27.3876 40.8624 27.1848C41.1664 26.8532 41.151 26.5384 40.8147 26.2064C40.4262 25.8231 38.624 25.8066 38.2787 26.1831ZM33.0024 27.6205C33.9663 28.0561 34.9343 29.0178 35.3968 29.9997C35.7023 30.6481 35.763 30.9688 35.763 31.9364C35.763 33.356 35.3689 34.3167 34.3905 35.2822C33.428 36.232 32.4465 36.6191 30.9997 36.6191C29.5529 36.6191 28.5714 36.232 27.609 35.2822C26.6306 34.3167 26.2365 33.356 26.2365 31.9364C26.2365 30.9688 26.2971 30.6481 26.6027 29.9997C27.216 28.6976 28.4895 27.6418 29.8571 27.3013C30.6976 27.0921 32.1616 27.2407 33.0024 27.6205Z"
              fill="#A0A4AB"
            />
            <circle cx="31" cy="31" r="30" stroke="#FCFCFC" strokeWidth="2" />
          </svg>
        </div>
      )}

      {preview && (
        <>
          <div className="absolute left-1/2 transform -translate-x-1/2 text-sm font-semibold leading-6 uppercase text-[#FCFCFC] z-30 top-40">
            GREAT SHOT!
          </div>
          <div className="absolute bottom-30 left-1/2 transform -translate-x-1/2 z-30 flex flex-col items-center gap-3">
            <h2 className="text-lg font-semibold mb-5 md:mb-7 text-[#FCFCFC] drop-shadow-md">
              Preview
            </h2>
            <div className="flex gap-6">
              <button
                onClick={() => {
                  setPreview(false);
                  setImageData(null);
                  startCamera();
                }}
                className="px-4 py-1 bg-gray-200 text-gray-800 cursor-pointer hover:bg-gray-300 shadow-md text-sm"
              >
                Retake
              </button>
              <button
                onClick={handleConfirm}
                disabled={loading}
                className="px-6 py-2 bg-[#1A1B1C] text-[#FCFCFC] cursor-pointer hover:bg-gray-800 shadow-md text-sm"
              >
                {loading ? "Analyzing photo..." : "Use this photo"}
              </button>
            </div>
          </div>
        </>
      )}

 {loading && (
  <div className="absolute inset-0 z-50 flex items-center justify-center bg-black">
    <div className="w-[260px] h-[150px] bg-black rounded-xl shadow-md flex flex-col items-center justify-center">
      <p
        className="text-lg font-semibold text-white mb-6 tracking-wide uppercase animate-pulse"
        style={{ animationDelay: "-0.15s" }}
      >
        ANALYZING IMAGE...
      </p>
    </div>
  </div>
)}

    </div>
  );
};

export default Capture;
