import PropTypes from 'prop-types'

export const mobileTypes = PropTypes.shape({
  id: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired
})
