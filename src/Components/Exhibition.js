import { Text, Card } from "@nextui-org/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ExhibitionData } from "../WebsiteContent";
import { NavLink } from "react-router-dom";

const Exhibition = () => {
  const exbitions = ExhibitionData;

  return (
    <div id="ExhibitionsTarget">
      <Text h1 color="primary">
        Featured Exhibitions
      </Text>

      <Carousel showThumbs={false} autoPlay infiniteLoop showStatus={false}>
        {exbitions.map((exhibition, index) => (
          <NavLink key={index} to={`/exhibition/${index}`}>
            <Card className="rounded-none" hoverable clickable>
              <Card.Body css={{ p: 0 }}>
                <Card.Image src={exhibition.image} width="100%" height={400} />
              </Card.Body>
              <Card.Footer justify="flex-start">
                <div>
                  <Text h3>{exhibition.title}</Text>
                  <Text h4>{exhibition.artist}</Text>
                  <Text>{exhibition.exhibitionPeriod}</Text>
                </div>
              </Card.Footer>
            </Card>
          </NavLink>
        ))}
      </Carousel>
    </div>
  );
};

export default Exhibition;
