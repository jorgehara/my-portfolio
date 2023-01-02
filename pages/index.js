import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import CardsProjects from "../components/CardsProjects";
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
        </div>
      </Head>
      {/* Second section */}
      <div className="container ">
        <section className="row justify-content-center">
          <div className="col-12 p-2">
            <div className="card bg-light animate__animated animate__fadeInLeft">
              <div className="col-md-12 my-2">
                <h1 className="text-center text-dark bg-gradient bg-opacity-90">
                  Projects
                </h1>
              </div>
            </div>
            {/* Start List of Projects */}
            <CardsProjects />
          </div>
        </section>
      </div>
      <Layout />
    </>
  );
}
