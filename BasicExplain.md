# Web Page Blog

This is a web page blog where users can create and save their blog posts. The blog posts are stored in the local storage of the browser.

## Features 
This challenge provides an input page for a new blog entry and an additional page that shows older blog entries, as well as the newly added blog post.

## Code Repository & Associated Deployed Site
Repository location URL: https://github.com/AeroRider66/04challenge

Webpage URL: https://aerorider66.github.io/butter_project2/

## How to Use

1.  Click on the deployed URL link below.
2. You will be presented with a page that asks for your name, the title of your post and a field for you to fill out your blog content entry.
3. Complete all fields and click the 'Submit' button.  
4. You will be taken to a new page that shows your new blog entry as well as previous blog entries from others.

## Under the Hood
The following is a synopsis of the operation of the code for this challenge.

1. There are 2 HTML files, and 3 JavaScript files that provide the functionality.
2. The 'index.html' file that provides the framework for the user input.
3. The 'blog.html' file that provides the framework for rendered posts.
4. The 'form.js' file provides the data capture from the user input.
5. The 'blog.js' file takes the data stored in local storage and renders to the 'blog.html' page.  Examination of the console will show the user's name, title and content stored in localStorage.  This file also provides seed data to show as previous blog entries.  
6. The 'logic.js' file provides the 3 functions for handling the submission from the 'index.html', and writing this data to storage, and also provides the reading of data from storage.


## Dependencies

No external dependencies are required for this web page blog.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

Deployed URL
https://aerorider66.github.io/Module-3-Challenge/
