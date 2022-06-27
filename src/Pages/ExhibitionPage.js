import { Image, Text, Collapse, Button, Row } from "@nextui-org/react";
import { ExhibitionData } from "../WebsiteContent";
import { HiX } from "react-icons/hi";
import { useNavigate, useParams } from "react-router-dom";

const ExhibitionPage = () => {
  const { id } = useParams();
  const dataIndex = parseInt(id);
  const exhibitionInfo = ExhibitionData[dataIndex];

  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/home");
  };

  return (
    <div className="m-12">
      <Row justify="space-between">
        <Text h2>{exhibitionInfo.artist}</Text>
        <Button
          className="rounded-none"
          onClick={handleClose}
          auto
          color="secondaryDark"
          icon={<HiX size={20}/>}
        />        
      </Row>

      <Image
        showSkeleton
        src={exhibitionInfo.image}
        alt={exhibitionInfo.title}
        width={1000}
        height={800}
        autoResize
      />
      <Collapse title={exhibitionInfo.title}>
        <Text>{exhibitionInfo.exhibitionPeriod}</Text>
        <Text>{exhibitionInfo.description}</Text>
      </Collapse>
    </div>
  );
};

export default ExhibitionPage;
