import PartCard from "./PartCard";

const PartsList = ({ parts }) => {
  return (
    // TODO (lsavage): replace w/ parts from API
    <div id="parts-list">
      {parts.map((part) => (
        <PartCard part={part} key={part.id} />
      ))}
    </div>
  );
};

export default PartsList;
