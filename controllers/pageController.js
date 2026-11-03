export function getHome(req, res) {
  res.json({ message: "Welcome to the home page." });
}

export function getAbout(req, res) {
  res.json({
    title: "About Us",
    message: "This is the about page."
  });
}

export function getContact(req, res) {
  res.json({
    title: "Contact Us",
    message: "Get in touch with us."
  });
}

export function getIndex(req, res) {
  res.json({
    message: "Welcome to the home page.",
    endpoints: ["/api/home", "/api/about", "/api/contact"]
  });
}
