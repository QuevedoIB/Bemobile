import i18n from '@/locales'

export const formatPrice = ({ price, language = i18n.language }) => {
  return new Intl.NumberFormat(language, {
    style: 'currency',
    currency: 'EUR'
  }).format(price)
}
