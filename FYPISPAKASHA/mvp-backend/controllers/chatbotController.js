// controllers/chatbotController.js
exports.generateWebsite = async (req, res) => {
    const { industry, businessDetails } = req.body;
  
    // Example: Generate website content based on industry
    const websiteContent = generateContent(industry, businessDetails);
  
    // Return the generated website content
    res.json({ websiteContent });
  };
  
  const generateContent = (industry, businessDetails) => {
    // Placeholder function to generate website content
    return `
      <html>
      <head>
        <title>${businessDetails.name}</title>
      </head>
      <body>
        <header style="background-color: #333; color: #fff; padding: 10px;">
          <img src="${businessDetails.logo}" alt="Logo" style="height: 50px;">
          <nav style="float: right;">
            <a href="#about" style="color: #fff; margin: 0 10px;">About</a>
            <a href="#services" style="color: #fff; margin: 0 10px;">Services</a>
            <a href="#contact" style="color: #fff; margin: 0 10px;">Contact</a>
          </nav>
        </header>
        <section id="about">
          <h1>About Us</h1>
          <p>${businessDetails.about}</p>
        </section>
        <section id="services">
          <h1>Our Services</h1>
          <p>${businessDetails.services}</p>
        </section>
        <section id="contact">
          <h1>Contact Us</h1>
          <p>${businessDetails.contact}</p>
        </section>
      </body>
      </html>
    `;
  };
  
const Website = require('../models/Website');

exports.generateWebsite = async (req, res) => {
  const { industry, businessDetails } = req.body;

  const websiteContent = generateContent(industry, businessDetails);



  const website = new Website({
    user: req.user.id,
    content: websiteContent
  });

  await website.save();

  res.json({ websiteContent, websiteId: website._id });
};