import React from 'react'
import PropTypes from 'prop-types'

import scale from './scale'

const Box = ({ mv, mh, mt, mb, ml, mr, pv, ph, pt, pb, pl, pr, ...props }) => {
  const styles = {
    // Margins
    marginTop: scale[mt || mv || 0],
    marginBottom: scale[mb || mv || 0],
    marginLeft: scale[ml || mh || 0],
    marginRight: scale[mr || mh || 0],
    // Paddings
    paddingTop: scale[pt || pv || 0],
    paddingBottom: scale[pb || pv || 0],
    paddingLeft: scale[pl || ph || 0],
    paddingRight: scale[pr || ph || 0],
    // Add default styles
    ...props.styles
  }
  return <div style={styles}>{ props.children }</div>
}

Box.propTypes = {
  children: PropTypes.node.isRequired,
  styles: PropTypes.object,
  // Margins
  // Vertical margin
  mv: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  // Horizontal margin
  mh: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  // Top margin
  mt: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  // Bottom margin
  mb: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  // Left margin
  ml: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  // Right margin
  mr: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),

  // Paddings
  // Vertical padding
  pv: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  // Horizontal padding
  ph: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  // Top padding
  pt: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  // Bottom padding
  pb: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  // Left padding
  pl: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  // Right padding
  pr: PropTypes.oneOf([1, 2, 3, 4, 5, 6])
}

export default Box
