import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div className="flex justify-end">
      <Button onClick={handleClose} warning rounded>
        I accept the terms
      </Button>
    </div>
  );
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>I agree to the terms and conditions</p>
    </Modal>
  );

  return (
    <div className="relative">
      <Button onClick={handleClick} primary rounded>
        Show Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum quaerat
        error incidunt necessitatibus. Similique a delectus est inventore
        impedit quasi officia dolores? Quisquam sapiente ad nihil vero explicabo
        aliquid adipisci.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum quaerat
        error incidunt necessitatibus. Similique a delectus est inventore
        impedit quasi officia dolores? Quisquam sapiente ad nihil vero explicabo
        aliquid adipisci.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum quaerat
        error incidunt necessitatibus. Similique a delectus est inventore
        impedit quasi officia dolores? Quisquam sapiente ad nihil vero explicabo
        aliquid adipisci.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum quaerat
        error incidunt necessitatibus. Similique a delectus est inventore
        impedit quasi officia dolores? Quisquam sapiente ad nihil vero explicabo
        aliquid adipisci.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum quaerat
        error incidunt necessitatibus. Similique a delectus est inventore
        impedit quasi officia dolores? Quisquam sapiente ad nihil vero explicabo
        aliquid adipisci.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum quaerat
        error incidunt necessitatibus. Similique a delectus est inventore
        impedit quasi officia dolores? Quisquam sapiente ad nihil vero explicabo
        aliquid adipisci.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum quaerat
        error incidunt necessitatibus. Similique a delectus est inventore
        impedit quasi officia dolores? Quisquam sapiente ad nihil vero explicabo
        aliquid adipisci.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum quaerat
        error incidunt necessitatibus. Similique a delectus est inventore
        impedit quasi officia dolores? Quisquam sapiente ad nihil vero explicabo
        aliquid adipisci.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum quaerat
        error incidunt necessitatibus. Similique a delectus est inventore
        impedit quasi officia dolores? Quisquam sapiente ad nihil vero explicabo
        aliquid adipisci.
      </p>
    </div>
  );
}

export default ModalPage;
