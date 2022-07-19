import { radio_data } from '../../src/mock-data/mock-radio'
import { radioFilter } from '../../src/utilites/radio-filter'

export default function get_radio(req, res) {
  console.log('req.query', req.query)
  if (Object.keys(req.query).length === 0) {
    res.status(200).json({
      filteredStantions: radio_data,
      filteredFavourites: [],
    })
    return
  }

  const { location, genre, name, favourites = null } = req.query

  console.log('location', location)

  const filteredStantions = radioFilter(radio_data, location, genre, name)
  const filteredFavourites = favourites
    ? radioFilter(radio_data, location, genre, name)
    : []

  res.status(200).json({
    filteredStantions,
    filteredFavourites,
  })
}
