import React from "react";
import Button from "../components/Button";
import { GoBell, GoHome, GoSearch } from "react-icons/go";

function ButtonPage() {
  return (
    <div>
      <div>
        <Button primary outline rounded className="mb-2">
          <GoBell />
          Hello
        </Button>
      </div>
      <div>
        <Button success rounded>
          World
        </Button>
      </div>
      <div>
        <Button danger outline>
          <GoHome />
          Goodbye
        </Button>
      </div>
      <div>
        <Button secondary>
          <GoSearch />
          Bye
        </Button>
      </div>
      <div>
        <Button warning>Bye</Button>
      </div>
    </div>
  );
}

export default ButtonPage;
