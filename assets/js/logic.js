function readStorage() {
    console.log("reading local storage..111.");
    const blogStorage = localStorage.getItem("blogPosts") || []

    if (blogStorage.length <= 0) {
        console.log("No blogs in storage");
        return blogStorage;
    }

    return JSON.parse(blogStorage)
}

function writeStorage(newPost = {}) {
    console.log("reading local storage..2.");
    const blogStorage = readStorage()
    console.log(blogStorage, "result");


    if (!newPost.title || !newPost.name || !newPost.content) {
        console.error("Missing keys in blogpost");
        return;

    }

    blogStorage.push(newPost);
    localStorage.setItem("blogPosts", JSON.stringify(blogStorage))
    return true;
}

function handleSubmit(event) {
    event.preventDefault()
    console.log(event);
    const newPost = {}

    for (let i = 0; i < event.target.length; i++) {
        const currentInput = event.target[i];
       
        if (!currentInput.name) {
            continue;
        }
        console.log(currentInput);
        newPost[currentInput.name] = currentInput.value
        console.log(currentInput.value);
       // if (currentInput.value !== "Submit") {
            currentInput.value = ""
     //   } removed due to line 38
    }
    console.log(newPost,"newPost");
    writeStorage(newPost)

    // need this to link the button event (handleSubmit(event))
    location.href = "./blog.html";

}

if(window.blogForm)blogForm.addEventListener("submit", handleSubmit)