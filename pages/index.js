import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home({ name }) {
  name = "JorgeHara";
  return (
    <>
      {/* Header Card */}
      <Head className="container-fluid text-center">
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <div className="container text-center ">
          <div className=" bg-black text-light">
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
                <h1 class="fs-1">{name}</h1>
                <h1 class="fs-2">Development Frontend</h1>
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
          <div className="row justify-content-center bg-gradient bg-opacity-90 rounded-1 col-7 p-3 w-50 h-50">
                <h1 class="fs-1">{name}</h1>
                <h1 class="fs-2">Development Frontend</h1>
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
        </div>
      {/* Second section */}
      {/* <div className="container mt-5 pt-5 ">
        <section className="row justify-content-center">
          <div className="col-12 justify-content-center">
            <div className="card card bg-light animate__animated animate__fadeInLeft">
              <div className="col-md-12">
                <h1 className="text-center text-dark bg-gradient bg-opacity-90">
                  Projects
                </h1>
              </div>
            </div>
          </div>
        </section>
            {/* Start List of Projects */}
          {/* <div className="col-md-12 justify-content-center">
          <div className="col-md-12 justify-content-center ">

          <div class="row justify-content-center">
        <div class="col-md-6 justify-content-center">
          <div class="card text-white bg-dark col w-100 h-80 rounded-1">
            <div class="card-header text-center fs-4 fw-semibold ">
              Project One
            </div>
            <div class="card-body p-2">
              <Image
                src="/imagen3.jpg"
                width={595}
                height={240}
                alt=""
                className="image-fluid m-1"
              />
              <h4 class="card-title fw-semibold p-2">
                WebSite make with React.js Bootstrap and Next.Js
              </h4>
              <p class="card-text p-2 my-1 text-start lh-3">
                In this project, technologies were used to generate a static
                website where no more functionality was required than just
                displaying important information for the client but that was not
                going to change constantly.
                <Link
                  href="/"
                  className="btn btn-outline-light bg-gradient rounded-1 text-center lh-sm col-3 m-1 p-1 pt-0"
                >
                  Know more
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-6 justify-content-center">
          <div class="card text-white bg-dark col w-100 h-80 rounded-1">
            <div class="card-header text-center fs-4 fw-semibold ">
              Project Two
            </div>
            <div class="card-body p-2">
              <Image
                src="/imagenDash1.jpg"
                width={595}
                height={240}
                alt=""
                className="image-fluid m-1"
              />
              <h4 class="card-title fw-semibold p-2">
                Simple Dashboard with React.Js Redux and
                Bootstrap
              </h4>
              <p class="card-text p-2 my-1 text-start lh-3">
                In this project, technologies will be used to generate a dynamic
                website which will require more functionality to handle the data of the forms that the
                client requests.
                <Link
                  href="/"
                  className="btn btn-outline-light bg-gradient rounded-1 text-center lh-sm col-3 m-1 p-1 pt-0"
                >
                  Know more
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>


            </div>
            </div> */}
      {/* </div> */} 
      </Head>

    </>
  );
}
