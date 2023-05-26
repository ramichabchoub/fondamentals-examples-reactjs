import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState([]);

  const handleClick = (index) => {
    setExpandedIndex((prevExpandedIndex) => {
      if (prevExpandedIndex.includes(index)) {
        // If the clicked item is already expanded, remove its index from the array
        return prevExpandedIndex.filter((i) => i !== index);
      } else {
        // If the clicked item is not expanded, add its index to the array
        return [...prevExpandedIndex, index];
      }
    });
  };

  const renderedItems = items.map((item, index) => {
    const isExpanded = expandedIndex.includes(index);

    const icon = (
      <span className="text-2xl">
        {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    );

    return (
      <div key={item.title}>
        <div
          className="flex items-center justify-between p-3 bg-gray-50 border-b cursor-pointer"
          onClick={() => handleClick(index)}
        >
          {item.title}
          {icon}
        </div>
        {isExpanded && <div className="border-b p-5">{item.content}</div>}
      </div>
    );
  });

  return <div className="border-x border-t rounded">{renderedItems}</div>;
}

export default Accordion;
