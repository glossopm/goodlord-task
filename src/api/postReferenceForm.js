import axios from "axios";

const postReferenceForm = async (formData) => {
  try {
    await axios.post("https://ref-api.goodlord.co/reference/new", formData);
  } catch (e) {
    throw new Error("Unable to send reference form");
  }
  return;
};

export default postReferenceForm;
