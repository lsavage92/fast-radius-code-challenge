import PartCard from "./PartCard";

const PartsList = ({ parts }) => {
  return (
    // TODO (lsavage): replace w/ parts from API
    <div id="parts-list">
      {[1].map((part) => (
        <PartCard part={part} />
      ))}
    </div>
  );
};

export default PartsList;
