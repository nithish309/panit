import React, { useState } from "react";
import emailjs from "emailjs-com"; // Import EmailJS

const Contact = ({ theme }) => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_message: "",
  });
  const [loading, setLoading] = useState(false); // State for loading spinner
  const [statusMessage, setStatusMessage] = useState(""); // State for status message

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const emailParams = {
      name: formData.user_name,
      email: formData.user_email,
      message: formData.user_message,
    };

    emailjs
      .send(
        "service_gzi0mnc", // ✅ Make sure this is correct
        "template_i1ys5wg", // ✅ Make sure this is correct
        emailParams,
        "BRv2FBMqGdFiszEng" // ✅ Your correct Public Key
      )
      .then((response) => {
        console.log("EmailJS Response:", response);
        setStatusMessage("Message sent successfully!");
        setFormData({ user_name: "", user_email: "", user_message: "" }); // Clear form
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setStatusMessage("Failed to send message. Please try again.");
      })
      .finally(() => {
        setLoading(false);
        setTimeout(() => setStatusMessage(""), 3000); // Clear message after 3 seconds
      });
  };

  return (
    <div>
      <div className="container mx-auto p-6 lg:w-1/2 lora-regular">
        <h1 className="text-2xl font-bold lg:text-3xl lg:font-bold text-center">
          Contact Us
        </h1>
        <form
          onSubmit={handleSubmit}
          className="mt-6 lg:mt-10 lg:mb-10 mb-6 text-center"
        >
          {/* Name Input */}
          <input
            type="text"
            name="user_name"
            className="input input-bordered sm:w-full lg:w-96 w-full"
            placeholder="Name"
            onChange={handleInputChange}
            value={formData.user_name}
            style={{
              backgroundColor: theme === "light" ? "white" : "grey",
              color: theme === "light" ? "#333" : "#fff",
            }}
            required
          />

          {/* Email Input */}
          <input
            type="email"
            name="user_email"
            className="input input-bordered mt-10 lg:mt-10 sm:w-full lg:w-96 w-full"
            placeholder="Email"
            onChange={handleInputChange}
            value={formData.user_email}
            style={{
              backgroundColor: theme === "light" ? "white" : "grey",
              color: theme === "light" ? "#333" : "#fff",
            }}
            required
          />

          {/* Message Input */}
          <textarea
            name="user_message"
            className="textarea textarea-bordered mt-10 lg:mt-10 sm:w-full lg:w-96 w-full"
            placeholder="Message"
            onChange={handleInputChange}
            value={formData.user_message}
            style={{
              backgroundColor: theme === "light" ? "white" : "grey",
              color: theme === "light" ? "#333" : "#fff",
            }}
            required
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="btn btn-success mt-10 lg:mt-10 sm:w-full lg:w-96 w-3/6"
            style={{ color: "white" }}
            disabled={loading} // Disable button during loading
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>

        {/* Status Message */}
        {statusMessage && <p className="text-center">{statusMessage}</p>}
      </div>
      {theme === "dark" ? <hr /> : null}
    </div>
  );
};

export default Contact;
