import React from 'react'
import PropTypes from 'prop-types';

export const Content = ({children}) => {
  
    return (
      <main>
          {children}
      </main>
    )
}

Content.propTypes = {
  children: PropTypes.string.isRequired,
}

export default Content;
