import React from 'react'
import Protemp from './Protemp'

function Project() {
  const project = [
    {
      id: 1,
      title: "Food Zone App",
      tech: "React Js Bootstrap 5 JavaScript",
      body: "Developed a functional food ordering application.Implemented features such as menu browsing and route functionalities.API integration to fetch data from custom JSON server enabling dynamic content usage.",
      link: "https://react-food-zone.netlify.app/",
      img : 'fz.png'
    },
    {
      id: 2,
      title: "Online Tour Website",
      tech: "HTML CSS JavaScript",
      body: "A Responsive Online Tour Booking Website that allows user to View toue Packages and an user friendly Website.",
      link: "https://surendersk1065.github.io/project3/",
      img : 'onlinetour.png'
    },
    {
      id: 3,
      title: "E-Commerce Website",
      tech: " Html Css",
      body: "A Responsive E-Comerce Website that allows user to view price,Model and purchase option of the product.",
      link: "https://surendersk1065.github.io/project1/",
      img : 'e-comm.png'
    },
    {
      id: 4,
      title: "PC Purchase website",
      tech: "Html JavaScript Bootstrap",
      body: "Developed a responsive Pc purchase website using HTML, CSS, JavaScript and Bootstrap. The website allows user to browse various Pc Products, view details.",
      link: "https://surendersk1065.github.io/bootstrap-project/",
      img : 'pc.png'
    }

  ]
  return (
    <div className='container' id='project'>
      <h1 className='text-light text-center fw-bolder'>My Projects</h1>
      <div className='row'>
        {
          project.map((val) => (
            <>
              <Protemp title={val.title} tech={val.tech} body={val.body} link={val.link} img= {val.img}/>
            </>
          ))
        }
      </div>
    </div>
  )
}

export default Project
