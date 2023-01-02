// import { useEffect } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import NProgress from "nprogress";
import nProgress from "nprogress";
import classNames from "classnames";

const Layout = ({ children, title, footer = true, dark = false }) => {
  const router = useRouter();

  // useEffect(() => {
  //   const handleRouteChange = (url) => {
  //     console.log(url);
  //     NProgress.start();
  //   };

    // router.events.on("routeChangeStart", handleRouteChange);

    // router.events.on("routeChangeComplete", () => NProgress.done());

    // router.events.on("routeChangeError", () => nProgress.done());

  //   return () => {
  //     // router.events.off("routeChangeStart", handleRouteChange);
  //   };
  // }, []);

  return (
    <div className={classNames({ "bg-dark": dark, "bg-light": !dark })}>
        
      {children}
    </div>
    
  );
};

Layout.proptypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  // footer: PropTypes.bool,
};

export default Layout;
