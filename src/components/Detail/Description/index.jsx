import { formatPrice } from '@/utils/formatPrice'

const Description = ({ mobile }) => {
  return (
    <div>
      <p>Detalles</p>
      <ul>
        <li>{mobile.brand}</li>
        <li>{mobile.model}</li>
        <li>{formatPrice({ price: mobile.price })}</li>
        <li>{mobile.cpu}</li>
        <li>{mobile.ram}</li>
        <li>{mobile.os}</li>
        <li>{mobile.displayResolution}</li>
        <li>{mobile.battery}</li>
        <li>{mobile.primaryCamera}</li>
        <li>{mobile.dimentions}</li>
        <li>{mobile.weight}</li>
      </ul>
    </div>
  )
}

export default Description
