export default ({body, title, img1}) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
       <head>
          <style>
             h1 {color:red;}
             h2 {color:blue;}
          </style>
          <!-- Scripts and styles here -->
          <title>${title}</title>
       </head>
       <body class="container">
          <header>
             <h1>Hello World App....</h1>
          </header>
          ${body}
          <footer>
             <p>&copy; Nobody</p>
          </footer>
          <div> <img src=${img1}></img></div>
          <div id="content1"></div>
          <h2>End....</h2>
       </body>
    </html>
    `;
};