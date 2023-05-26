import { useState, useEffect, useRef } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";
import Panel from "./Panel";

function Dropdown({ options, onChange, value }) {
  const [isOpen, setIsOpen] = useState(false);
  const divElement = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!divElement.current) {
        return;
      }
      if (!divElement.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.body.addEventListener("click", handleClickOutside, true);
    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleOptionClick = (option) => {
    setIsOpen(!isOpen);
    onChange(option);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  const icon = isOpen ? (
    <GoChevronDown className="text-lg" />
  ) : (
    <GoChevronLeft className="text-lg" />
  );

  return (
    <div className="w-48 relative" ref={divElement}>
      <Panel
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {value?.label || "Select..."}
        {icon}
      </Panel>
      {isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
    </div>
  );
}

export default Dropdown;
