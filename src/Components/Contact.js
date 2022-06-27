import { Modal, Button, Text, Input, Textarea } from "@nextui-org/react";
import "./Contact.css";

const Contact = (props) => {
  return (
    <Modal
      scroll
      width="600px"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      open={props.isVisible}
      preventClose
      className="rounded-none"
    >
      <Modal.Header>
        <Text id="modal-title" size={18} b>
          Contact Us
        </Text>
      </Modal.Header>
      <Modal.Body>
        <Input
          clearable
          underlined
          placeholder="Enter your name here"
          label="Name"
        />
        <Input
          clearable
          underlined
          placeholder="Enter your email address here"
          label="Email address"
        />
        <Textarea
          label="Message"
          placeholder="Enter your message here"
          underlined
          clearable
        />
      </Modal.Body>
      <Modal.Footer>
        <Button
          className="rounded-none"
          auto
          color="secondaryDark"
          onClick={() => props.setVisible(false)}
        >
          SUBMIT
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Contact;
