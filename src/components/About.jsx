import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from bg-gray-900 to to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <div>
                
                <p className='text-xl'>Hello! I'm Avigyat, a passionate and versatile Full Stack Developer specializing in MEAN/MERN stacks and ETL (Extract, Transform, Load) processes. With a strong foundation in both front-end and back-end technologies, I bring a holistic approach to web development.</p><br/>
                <p className='text-xl'>I thrive in building robust and scalable web applications using the MEAN (MongoDB, Express.js, Angular, Node.js) and MERN (MongoDB, Express.js, React, Node.js) stacks. My expertise lies in crafting seamless user experiences, integrating APIs, and implementing responsive design principles. Whether it's creating dynamic single-page applications or scalable server-side solutions, I am committed to delivering high-quality software that meets and exceeds client expectations.</p>
                <br/><p className='font-bold text-xl'>Let's Build Something Amazing Together:</p>
                <p className='text-xl'>I am excited about the endless possibilities at the intersection of MEAN/MERN stacks and ETL development. If you are looking for a developer who can seamlessly navigate the complexities of both worlds, let's connect. Together, we can turn your ideas into reality and create technology solutions that make a lasting impact.</p>
                <br/><p className='text-xl'>Feel free to reach out to me at <span className='text-blue-600'> Avigyat.avi@outlook.com </span>for collaboration or to discuss your project further.</p>
            </div>
        </div>
    </div>
  )
}

export default About