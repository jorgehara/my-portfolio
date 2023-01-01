import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";
import { experiences, projects, skills } from "../profile";
import styles from "../styles/Home.module.css";

export default function Home({ name }) {
  name = "JorgeHara";
  return (
    <>
      <Layout />
      {/* Header Card */}
      <Head className="container-fluid text-center">
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <div className="container text-center p-2">
          <div className="card card-body bg-secondary text-light">
            <div className="row justify-content-around">
              <div className="col-12" style={{ height: 53, vw: 150 }}>
                <Image
                  src="/imagen2.jpg"
                  width={1460}
                  height={250}
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className="row justify-content-center bg-gradient bg-opacity-90 rounded-1 col-7 p-3 w-50 h-50">
                {/* <Image
                    src="/perfil.jpg"
                    width={190}
                    height={190}
                    alt=""
                    
                    className="image-fluid"
                  /> */}
                <h1 class="fs-1">{name}</h1>
                <h1 class="fs-2">Development Frontend </h1>
                <figure class="text-center">
                  <blockquote class="blockquote">
                    <p class="fs-4 mb-0">
                      No te rindas nunca, porque nunca sabes si el próximo
                      intento será el que funcionará.
                    </p>
                  </blockquote>
                  <figcaption class="fs-5 blockquote-footer text-white text-center">
                    - Winnie the Pooh <cite title="Source Title"></cite>
                  </figcaption>
                </figure>
                <Link href="/" className="btn btn-outline-light col-4">
                  Contact me
                </Link>
              </div>
              <div className="row justify-content-around col-5"></div>
            </div>
          </div>
        </div>
      </Head>
      {/* Second section */}
      <section className="row justify-content-center">
        <div className="col-10 p-2">
          <div className="card bg-light animate__animated animate__fadeInLeft">
            <div className="col-md-12 my-2">
              <h1 className="text-center text-dark bg-gradient bg-opacity-90">
                Projects
              </h1>
            </div>
          </div>


{/* Start List of Projects */}
          <div class="row justify-content-center">
            <div class="col-6">
              <div class="card text-white bg-dark mb-3 col p-2 m-2 rounded-1">
                <div class="card-header text-center fs-4 fw-semibold ">
                  Project One
                </div>
                <div class="card-body p-2">
                  <Image
                    src="/imagen3.jpg"
                    width={565}
                    height={240}
                    alt=""
                    className="image-fluid m-1"
                  />
                  <h4 class="card-title fw-semibold p-2">
                    WebSite make with React.js Bootstrap and Next.Js card title
                  </h4>
                  <p class="card-text p-2 my-1 text-start lh-3">
                    In this project, technologies were used to generate a static
                    website where no more functionality was required than just
                    displaying important information for the client but that was
                    not going to change constantly.
                    <Link
                      href="/"
                      className="btn btn-outline-light bg-gradient rounded-1 text-center lh-sm col-3 m-1 p-1"
                    >
                      Know more
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="card text-white bg-dark mb-3 col p-2 m-2 rounded-1">
                <div class="card-header text-center fs-4 fw-semibold ">
                  Project Two
                </div>
                <div class="card-body p-2">
                  <Image
                    src="/imagen1.jpg"
                    width={565}
                    height={240}
                    alt=""
                    className="image-fluid m-1"
                  />
                  <h4 class="card-title fw-semibold p-2">
                    Dashboard simple para manejo de formularios con React.Js Reddux and Bootstrap
                  </h4>
                  <p class="card-text p-2 my-1 text-start lh-3">
                    In this project, technologies were used to generate a static
                    website where no more functionality was required than just
                    displaying important information for the client but that was
                    not going to change constantly.
                    <Link
                      href="/"
                      className="btn btn-outline-light bg-gradient rounded-1 text-center lh-sm col-3 m-1 p-1"
                    >
                      Know more
                    </Link>
                  </p>
                </div>
              </div>
            </div>



          </div>
        </div>
      </section>

      {/* Porfolio */
      /* <section>
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
                </section> */}

      <Layout />
    </>
  );
}
