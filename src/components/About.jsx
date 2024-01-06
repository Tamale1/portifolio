import React from 'react'
const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
         Hello! My name is <strong style={{color: 'navy'}}>Yusuf</strong>  a passionate  full-stack software developer with a keen enthusiasm for computing. 
        Armed with a Bachelor's degree in Information Technology and a certification in big data,
       my journey in the tech field has been marked by a deep love for crafting innovative solutions.
        I thrive on challenges and have honed my skills through collaborative efforts within dynamic teams. As a proactive learner, 
       I enjoy staying ahead of the curve in this ever-evolving field, constantly seeking opportunities to expand my knowledge and expertise.
        </p>

   

        <p className="text-xl mb-20">
          My professional journey has been grounded in hands-on experiences, contributing to diverse projects that have 
allowed me to showcase my proficiency in both front-end and back-end development. The blend of my academic background 
and real-world problem-solving experiences has equipped me to navigate the complexities of modern software development.
 Whether it's architecting scalable systems or delving into the intricacies of big data I 
look forward to each new opportunity as a chance to not only contribute to the 
advancement of technology but also to connect with like-minded individuals who share a passion for innovation and growth.
        </p>
      </div>
    </div>
  );
};

export default About;