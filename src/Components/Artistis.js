import { Text, Card } from "@nextui-org/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ArtistData } from "../WebsiteContent";

const Artists = () => {
  const artists = ArtistData;

  return (
    <div id="ArtistsTarget" className="h-full mt-12">
      <Text h1 color="primary">
        Represented Artists
      </Text>

      <Carousel showThumbs={false} autoPlay infiniteLoop showStatus={false}>
        {artists.map((artist, index) => (
          <Card
            className="rounded-none"
            key={index}
            hoverable
            clickable
            onClick={() => console.log(index, "artist")}
          >
            <Card.Body css={{ p: 0 }}>
              <Card.Image src={artist.image} width="100%" height={400} />
            </Card.Body>
            <Card.Footer justify="flex-start">
              <div>
                <Text h3>{artist.name}</Text>
              </div>
            </Card.Footer>
          </Card>
        ))}
      </Carousel>
    </div>
  );
};

export default Artists;
