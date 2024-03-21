import React from "react";

export function GridBackgroundDemo() {
  return (
    <div className="h-[35rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <p class="text-6xl md:text-9xl font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.purple.400),theme(colors.purple.100),theme(colors.pink.300),theme(colors.orange.400),theme(colors.pink.300),theme(colors.purple.100),theme(colors.purple.400))] bg-[length:200%_auto] animate-gradient">AskAGI</p>


    </div>
  );
}


// "use client";
// import React from "react";
// import { SparklesCore } from "./sparkles";

// export function SparklesPreview() {
//   return (
//     <div className="h-[30rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
//       <div className="w-full absolute inset-0 h-screen">
//         {/* <SparklesCore
//           id="tsparticlesfullpage"
//           background="transparent"
//           minSize={0.6}
//           maxSize={1.4}
//           particleDensity={100}
//           className="w-full h-full"
//           particleColor="#FFFFFF"
//         /> */}
//       </div>
//       <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
//         AskAGI
//       </h1>
//     </div>
//   );
// }
