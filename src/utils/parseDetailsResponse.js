export const parseDetailsResponse = response => ({
  ...response,
  options: {
    colors: response.options.colors.map(option => ({
      ...option,
      value: option.code
    })),
    storages: response.options.storages.map(option => ({
      ...option,
      value: option.code
    }))
  }
})
