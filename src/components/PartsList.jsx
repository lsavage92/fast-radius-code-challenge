import PartCard from "./PartCard";

const PartsList = ({ parts }) => {
  return (
    <div id="parts-list">
      {parts.map((part) => (
        <PartCard part={part} key={part.id} />
      ))}
    </div>
  );
};

export default PartsList;
