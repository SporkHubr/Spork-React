/* eslint-disable no-undef */
import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

import useRouter from 'utils/useRouter';

const Page = (props) => {
  const { title, children, ...rest } = props;

  return (
    <div {...rest}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {children}
    </div>
  );
};

Page.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};

export default Page;
