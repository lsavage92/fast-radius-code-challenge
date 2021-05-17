import { useState } from "react";

import { updateQuantity } from "../services";

const PartCard = ({ part }) => {
  let [quantity, setQuantity] = useState(part.quantity);

  return (
    <div>
      <span>{part.part_file.file_name}</span>
      <div className="card-actions">
        <input
          type="text"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button onClick={(e) => updateQuantity(quantity, part.id)}>Save</button>
      </div>
    </div>
  );
};

export default PartCard;
