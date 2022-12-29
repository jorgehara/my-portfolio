import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";
import { experiences, projects, skills } from "../profile";
import styles from "../styles/Home.module.css";

export default function Home({name})
{
  name = "JorgeHara";

  return (
    <>
      <Layout />
      {/* Header Card */}
      <Head className="container-fluid">
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <div className="container-fluid p-2">
          <div className="card card-body bg-secondary text-light">
          <div className="row">
            <div className="row align-items-center">
            <div className="col-2 imgset">
            </div>
              <div className="col-2 imgset p-0 m-0">
                <Image
                  src="/perfil.jpg"
                  width={200}
                  height={190}
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className="col-5 p-0 m-0">
                <h3>Devs Stack Frontend </h3>
                <h1>{name}</h1>
                <figure class="text-start">
                  <blockquote class="blockquote">
                    <p class="mb-0">
                  No te rindas nunca, porque nunca sabes si el próximo intento será el que funcionará.
                  </p>
                  </blockquote>
                  <figcaption class="blockquote-footer">
                  - Winnie the Pooh <cite title="Source Title"></cite>
                  </figcaption>
                </figure>
                <Link href="/" className="btn btn-outline-light">
                  Contact me
                </Link>
              </div>
            </div>
          </div>
          </div>
        </div>
      </Head>

      {/* Second section */}

      <section className="row">
        <div className="col-md-4 p-2">
          {/* <div className="card bg-light animate__animated animate__fadeInLeft">
            {/* <div className="card-body">
              <h1>Skills</h1>
              {skills.map(({ skill, percentage }, i) => (
                <div className="py-3" key={i}>
                  <h5>{skill}</h5>
                  <div className="progress ">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: `${percentage}%` }}
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              ))}
            </div> */}
          {/* </div> */}
        </div>

        <div className="col-md-8 p-2">
          {/* Experience */}
          {/* <div className="card bg-light animate__animated animate__fadeInRight">
            <div className="card-body">
              <h1>Experience</h1>

              <ul>
                {/* List Item Experience */}
                {/* {experiences.map(({ title, from, to }, index) => (
                  <li key={index}>
                    <h3>{title}</h3>
                    <h5>
                      {from} {to ? `- ${to}` : "- current"}
                    </h5>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Sint excepturi ea explicabo. Illum suscipit illo, porro
                      quisquam voluptatem officiis fugiat vel animi aliquam
                      inventore rem. Quo laudantium temporibus cupiditate. Aut?
                    </p>
                  </li>
                ))} */}
              {/* </ul>
              <Link href="/hireme" className="btn btn-light">
                Know More
              </Link>
            </div>
          </div> */}
        </div>
      </section>



      
      {/* Porfolio */}
      <section>
        <div className="row">
          <div className="col-md-12">
            <div className="card card-body bg-dark">
              <div className="row">
                <div className="col-md-12 my-2">
                  <h1 className="text-center text-light">Portfolio</h1>
                </div>
                {projects.map(({ name, description, image }, index) => (
                  <div className="col-md-4 p-2" key={index}>
                    <div className="card h-100">
                      <div className="overflow">
                        <Image
                          src={`/${image}`}
                          width={220}
                          height={220}
                          alt=""
                          className="card-img-top"
                        />
                      </div>
                      <div className="card-body">
                        <h3>{name}</h3>
                        <p>{description}</p>
                        {/* <a href="#!">Know More</a> */}
                      </div>
                    </div>
                  </div>
                ))}

                <div className="col-md-12 mt-4">
                  <div className="text-center">
                    <Link href="/" className="btn btn-outline-light">
                      More Projects
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="bg-dark text-light text-center">
          <div className="container p-4">
            <h1>&copy; {name}</h1>
            <p>2020 - {new Date().getFullYear()}</p>
        
          </div>
        </footer>
      </section>
      <Layout />
    </>
  );
}
