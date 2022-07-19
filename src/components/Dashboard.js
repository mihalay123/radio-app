import Button from './atoms/Button'
import { locations, genres } from '../config'

const Dashboard = ({
  data = [],
  setLocation = () => {},
  setGenre = () => {},
}) => {
  return (
    <div className="w-full">
      <div className="flex flex-row">
        <Button>My best</Button>
        <div className="flex flex-row overflow-x-scroll">
          {genres.map((genre) => (
            <Button key={genre} onClick={() => setGenre(genre.toLowerCase())}>
              {genre}
            </Button>
          ))}
        </div>
      </div>
      <div className="flex flex-row">
        <div className="flex flex-col shrink-0 overflow-y-scroll">
          {Object.keys(locations).map((location) => (
            <Button key={location} onClick={() => setLocation(location)}>
              {locations[location]}
            </Button>
          ))}
        </div>
        <div className="w-full flex flex-row flex-wrap content-start">
          {data?.length &&
            data.map((station) => (
              <Button key={station?.name}>{station?.name}</Button>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
