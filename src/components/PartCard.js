import { useState } from "react";

const PartCard = ({ part }) => {
  let [quantity, setQuantity] = useState(null);
  return (
    <div>
      <span>PART_NAME_HERE</span>
      <div className="card-actions">
        <input
          type="text"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </div>
    </div>
  );
};

export default PartCard;
