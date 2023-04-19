import React, { forwardRef } from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";

const Page = forwardRef(
  ({ children, title = "", description = "", ...rest }, ref) => {
    return (
      <div ref={ref} {...rest}>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
        </Helmet>
        {children}
      </div>
    );
  }
);

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

export default Page;
