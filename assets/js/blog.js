// Sample blog posts data
const blogPosts = [
    {
      name: "Frodo",
      title: "One Ring to Rule Them All",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      name: "Lazarus Long",
      title: "Time Enough for Love",
      content: "Praesent auctor, mauris non blandit fringilla, augue purus cursus nulla, a tincidunt eros est nec turpis."
    },
    {
      name: "Paul Atredies",
      title: "The Spice is Control",
      content: "Fusce eget nibh id metus tincidunt semper eu sit amet est."
    }
  ];
  
  // Function to render blog posts
  function renderBlogPosts() {
    const postContainer = document.getElementById('posts');
    const blogStorage = readStorage()
    blogPosts.push(...blogStorage)
    // Clear existing posts
    postContainer.innerHTML = '';
    
    // Loop through blog posts and create HTML elements for each post
    blogPosts.forEach(post => {
      console.log(post);
      
      
      const userNameElement = document.createElement('p');
      const titleElement = document.createElement('h2');
      const contentElement = document.createElement('p');
      
      userNameElement.classList.add('post-userNname');
      titleElement.classList.add('post-title');
      contentElement.classList.add('post-content');

      userNameElement.textContent = post.name;
      titleElement.textContent = post.title;
      contentElement.textContent = post.content;
     
      const postElement = document.createElement('article');

      postElement.appendChild(userNameElement);
      postElement.appendChild(titleElement);
      postElement.appendChild(contentElement);
      
      postContainer.appendChild(postElement);
    });
  }
  
  // Call the renderBlogPosts function to display the blog posts on page load
  renderBlogPosts();

