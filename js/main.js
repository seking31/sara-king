// Form handler

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    try {
      await emailjs.send("service_5h8cutg", "template_6ca9nzh", {
        name: name,
        email: email,
        message: message,
      });
      alert("Message sent successfully.");
      form.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      alert("Failed to send message. Please try again later.");
    }
  });
});
