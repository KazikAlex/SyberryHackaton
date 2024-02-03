import React, { forwardRef } from "react";
import Footer from "../footer/footer";
import Header from "../Header/Header";

export const Layout = forwardRef((props, ref) => {
  const { children, className, ...rest } = props;

  return (
    <div ref={ref} {...rest}>
      <Header />
      <div className={"main"}>{children}</div>
      <Footer />
    </div>
  );
});
