import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">About</h1>
        <p>
          Hello, I'm Sopan Bharkad , a passionate Web developer with a keen eye for MERN
          Stack . With a background in CSE, I strive to create impactful and
          visually stunning Software solutions that leave a lasting impression.
        </p>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Education & Training
        </h1>
        <span>
        Hi Everyone, I am Sopan Bharkad from Nanded, India.
         I have currently pursuing B.tech in Computer Science and Engineering at TGPCET, Nagpur
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Skills & Expertise
        </h1>
        <span>
            <li>Proficient in Html,Css,JS,React</li>
            <li>Experienced with Visual Studio Code, GitHub, Microsoft Office Suite (Word, Excel, PowerPoint)</li>
            <li>Excellent problem-solving skills</li>
            <li>Effective communicator and collaborator</li>
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Professional Experience
        </h1>
        <span>
              <b className="text-orange-400 font-semibold text-xl">Internship at A-Fame Technologies as a web developer:</b>
               <li>Developed and maintained responsive web applications using HTML, CSS, and JavaScript.</li>
                <li>Assisted in troubleshooting and debugging issues for cross-browser compatibility.</li>
        </span>
        {/* <br />
        <br /> */}
        {/* <h1 className="text-green-600 font-semibold text-xl">
          Achievements & Awards
        </h1> */}
        {/* <span>
          [Award/Recognition], [Organization/Institution], [Year] [Achievement],
          [Organization/Platform], [Year]
        </span> */}
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Mission Statement
        </h1>
        <p>
          My mission is to leverage my skills and creativity to deliver
          innovative Computer Science & Engineering solutions that exceed client expectations and
          contribute positively to the digital landscape. I am committed to
          continuous learning and growth, always seeking new challenges and
          opportunities to expand my horizons.
        </p>
      </div>
    </div>
  );
}

export default About;
