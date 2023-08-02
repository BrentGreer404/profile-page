import sc1 from "../images/asylum screenshot.png"
import sc2 from "../images/advanced screenshot.png"
import sc3 from "../images/apod screenshot.png"

export const projects = [
  {
    title: "HRF Asylum Generator",
    image: sc1,
    git: "https://github.com/BrentGreer404/asylum-rg-fe-starter",
    notes: [
      "Developed React.js responsive landing page with images and styled using CSS",
      "Configured API to retrieve and format data using Axios",
      "Integrated Auth0 to provide user login authentication",
      "Created a dynamic profile page that displays user data with interactive features built with CSS      "
    ]
  },
  {
    title: "Authentication Application",
    image: sc2,
    git: "https://github.com/BrentGreer404/web-sprint-challenge-advanced-web-applications",
    notes: [
      "Created authenticated and restricted API with JWT and Node.js",
      "Built SQLite database and implemented Knex to store, access, and manage user data",
      "Hashed and validated user passwords using BcryptJS",
      "Built custom middleware functions to validate authentication and authorization",
      "Implemented Express router in conjunction with middleware to manage authorization"
    ]
  },
  {
    title: "NASA APOD Application",
    image: sc3,
    git: "https://github.com/BrentGreer404/nasa-photo-of-the-day",
    notes: [
      "Created an application to retrieve NASA’s astronomy picture of the day (APOD) from their API using Axios",
      "Built a date form component to retrieve the APOD data from a specific date using get requests with Axios",
      "Applied styled components using CSS"
    ],
    url: "https://web-sprint-challenge-single-page-applications-5jh-brentgreer404.vercel.app/"
  }
]