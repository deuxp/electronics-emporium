// vanillaJS example: https://realdealpainting.net/reviews
const navAnchor = document.getElementById("navAnchor");
const footerAnchor = document.getElementById("footerAnchor");

// 1. Create a template element
const navbar = document.createElement("template");
const footer = document.createElement("template");

// 2. Set its inner html & content with template literals
navbar.innerHTML = `
<div>D.B.E.C.</nav>
`;

footer.innerHTML = `
<footer class="h-12"></footer>
`;
// 3. Append the element to another tag in the DOM tree
// the template is now an object whose innerHTML is the content attribute
navAnchor.appendChild(navbar.content);
