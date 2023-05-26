import { useState } from "react";
import Dropdown from "../components/Dropdown";

function DropdownPage() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  const options = [
    {
      label: "Red",
      value: "red",
    },
    {
      label: "Green",
      value: "green",
    },
    {
      label: "Blue",
      value: "blue",
    },
  ];

  return (
    <Dropdown
      options={options}
      onChange={handleSelect}
      value={selectedOption}
    />
  );
}

export default DropdownPage;
