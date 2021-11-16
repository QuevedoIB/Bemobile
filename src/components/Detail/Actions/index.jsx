import { useState, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'

import Select from '@/components/common/Select'
import Button from '@/components/common/Button'

import MobileService from '@/services/MobileService'

import { setCartAmount } from '@/redux/reducers/cart'

const Actions = ({ mobile }) => {
  const [t] = useTranslation()
  const [storage, setStorage] = useState(mobile.options.storages[0].code)
  const [color, setColor] = useState(mobile.options.colors[0].code)
  const dispatch = useDispatch()

  const onAddToCart = useCallback(async () => {
    try {
      const response = await MobileService.addToCart({
        id: mobile.id,
        colorCode: color,
        storageCode: storage
      })
      dispatch(setCartAmount(response.count))
    } catch (error) {
      console.error(error)
    }
  }, [mobile.id, dispatch, color, storage])

  const handleColorChange = useCallback(e => {
    setColor(e.target.value)
  }, [])

  const handleStorageChange = useCallback(e => {
    setStorage(e.target.value)
  }, [])

  return (
    <div>
      <Select
        options={mobile.options.colors}
        value={color}
        onChange={handleColorChange}
      />
      <Select
        options={mobile.options.storages}
        value={storage}
        onChange={handleStorageChange}
      />
      <Button onClick={onAddToCart}>{t('cart.add')}</Button>
    </div>
  )
}

export default Actions
