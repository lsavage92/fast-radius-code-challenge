/**
 * Typically this would be a folder with each file being related to a different
 * backend view.
 */

export const fetchParts = async () => {
  try {
    const res = await fetch("http://localhost:5555/parts");
    const json = await res.json();
    return json;
  } catch (e) {
    // TODO (lsavage): Error handling
    console.error(e);
  }
};

export const updateQuantity = async (quantity, id) => {
  try {
    const res = await fetch(`http://localhost:5555/parts/${id}`, {
      method: "PUT",
      body: JSON.stringify({ quantity }),
    });
    const json = await res.json();
    return json;
  } catch (e) {
    // TODO (lsavage): Error handling
    console.error(e);
  }
};
