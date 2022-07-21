import { useState } from 'react'
import Button from './atoms/Button'
import PlaceHolder from './atoms/PlaceHolder'

import { locations, genres } from '../config'

const Dashboard = ({
  data = [],
  favorites = [],
  handleLocation = () => {},
  handleGenre = () => {},
  addFavorite = () => {},
  handlePlayingStation = () => {},
}) => {
  const [isFavorite, setIsFavorite] = useState(false)

  const currentData = isFavorite ? favorites : data

  const onStationClick = (station) => {
    addFavorite(station)
    handlePlayingStation(station)
  }

  return (
    <div className="w-full">
      <div className="flex flex-row">
        <Button onClick={() => setIsFavorite(!isFavorite)}>My best</Button>

        <div className="flex flex-row overflow-x-scroll">
          {genres.map((genre) => (
            <Button
              key={genre}
              onClick={() => handleGenre(genre.toLowerCase())}
            >
              {genre}
            </Button>
          ))}
        </div>
      </div>

      <div className="flex flex-row">
        <div className="flex flex-col shrink-0 overflow-y-scroll">
          {Object.keys(locations).map((location) => (
            <Button key={location} onClick={() => handleLocation(location)}>
              {locations[location]}
            </Button>
          ))}
        </div>

        <div className="w-full flex flex-row flex-wrap content-start">
          {currentData?.length ? (
            currentData.map((station) => (
              <Button
                key={station?.name}
                onClick={() => onStationClick(station)}
              >
                {station?.name}
              </Button>
            ))
          ) : (
            <PlaceHolder />
          )}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
