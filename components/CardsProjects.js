import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function CardsProjects() {
  return (
    <>
      <div class="row justify-content-center">
        <div class="col-6">
          <div class="card text-white bg-dark mb-3 col p-2 m-2 w-100 h-80 rounded-1">
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
                WebSite make with React.js Bootstrap and Next.Js
              </h4>
              <p class="card-text p-2 my-1 text-start lh-3">
                In this project, technologies were used to generate a static
                website where no more functionality was required than just
                displaying important information for the client but that was not
                going to change constantly.
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
          <div class="card text-white bg-dark mb-3 col p-2 m-2 w-100 h-80 rounded-1">
            <div class="card-header text-center fs-4 fw-semibold ">
              Project Two
            </div>
            <div class="card-body p-2">
              <Image
                src="/imagenDash1.jpg"
                width={565}
                height={240}
                alt=""
                className="image-fluid m-1"
              />
              <h4 class="card-title fw-semibold p-2">
                Simple Dashboard for manage of the forms with React.Js Redux and
                Bootstrap
              </h4>
              <p class="card-text p-2 my-1 text-start lh-3">
                In this project, technologies will be used to generate a dynamic
                web site which will require more completeness in the
                functionality to handle the data of the formularies that the
                client requests.
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
    </>
  );
}
