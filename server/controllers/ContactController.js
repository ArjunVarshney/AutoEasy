import Contact from "../Model/ContactModel.js";
import User from "../Model/UserModel.js";

// for storing a message in the database
export const makeMessage = async (req, res) => {
  try {
    const messageDetails = req.body;
    let person;
    person = await User.findById(messageDetails.userid);

    if (!person) {
      res.status(400).json({
        success: false,
        reason: "Person not found in the database",
      });
      return;
    }

    const newMessage = new Contact(messageDetails);
    const savedMessage = await newMessage.save();

    if (!savedMessage) {
      res.status(500).json({
        success: false,
        reason: "Could not save message",
      });
    }

    res.json({
      success: true,
      data: savedMessage,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      reason: error.message,
    });
  }
};

// for getting all the messages present in the database
export const getAllMessages = async (req, res) => {
  const messages = await Contact.find();
  res.json({
    success: true,
    data: messages,
  });
};
