import { Text, Card, Grid, Row } from "@nextui-org/react";
import { AvailableWorkData } from "../WebsiteContent";

const AvailableWorks = () => {
  const list = AvailableWorkData;

  return (
    <div id="AvailableWorkTarget" className="mt-12">
      <Text h1 color="primary">Available Works</Text>
      <Grid.Container gap={2} justify="flex-start">
        {list.map((item, index) => (
          <Grid xs={6} sm={3} key={index}>
            <Card className="rounded-none" hoverable clickable onClick={()=>console.log(index,'item clicked')}>
              <Card.Body css={{ p: 0 }}>
                <Card.Image
                  src={item.img}
                  width="100%"
                  height={140}
                  alt={item.title}
                />
              </Card.Body>
              <Card.Footer justify="flex-start">
                <Row wrap="wrap" justify="space-between">
                  <Text b>{item.title}</Text>
                  <Text css={{ color: "$accents4", fontWeight: "$semibold" }}>
                    {item.price}
                  </Text>
                </Row>
              </Card.Footer>
            </Card>
          </Grid>
        ))}
      </Grid.Container>
    </div>
  );
};

export default AvailableWorks;
