import { Button } from "react-bootstrap";
import frontend from '../assets/frontend.png';
import backend from '../assets/backend.png';
import fullstack from '../assets/fullstack.png';
import { useState } from "react";
import Card from "./Card";

const data = [
  {
    id: 323,
    name: "Frontend",
    image: frontend,
    description: "Frontend is the part of the website that users interact with. I focus on crafting responsive, user-friendly interfaces using HTML, CSS, JavaScript, and React.js. I’ve worked on dynamic, visually appealing websites optimized for performance and accessibility. ",
    project : {
      name : "Basket Ball",
      describtion: "I have created for the frontend project which user-friendly interface using react.js and it is mobile responsive too.",
      link : 'https://github.com/keshavyadav5/Basketball-React'
    }
  },
  {
    id: 324,
    name: "Backend",
    image: backend,
    description: " I specialize in developing secure, scalable backend solutions using Node.js, Express, and MongoDB. My experience includes building RESTful APIs, handling authentication, and ensuring data security.",
    project : {
      name : "User Authentication",
      describtion: "It is secure user login and registration with JWT token-based authentication and bcrypt for password hashing with CRUD operation.",
      link : 'https://github.com/keshavyadav5/auth_mern'
    }
  },
  {
    id: 325,
    name: "Full Stack",
    image: fullstack,
    description: "Combining my frontend and backend expertise, I deliver complete, fullstack web applications. I ensure smooth integration between the frontend UI and backend data handling. ",
    project : {
      name : "Note App",
      describtion: "The application is built with the MERN stack and offers seamless user authentication with JWT tokens and session management through cookies.",
      link : 'https://github.com/keshavyadav5/Note-app'
    }
  }
]

const Services = () => {
  const [show, setShow] = useState(true);

  const handleChange = () =>{
    setShow(!show);
  }

  return (
    <div className="w-full text-black dark:text-white py-36" id="services">
      <h1 className="text-4xl md:text-6xl font-bold mb-10">
        ser<span className="text-[#01a2e6] underline">V</span>ices
      </h1>
      <div className="w-full flex-1 grid gird-cols-1 md:grid-cols-2 lg:flex lg:justify-between gap-4">

        {
          data.map((service) => (
            <Card service={service} key={service.id} />
          ))
        }



      </div>
    </div>
  );
};

export default Services;
