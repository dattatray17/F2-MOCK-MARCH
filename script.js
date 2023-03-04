// select the required elemets
let createBlogBtn = document.getElementById('create-blog-btn');
let modal = document.getElementById('modal');
let closeBtn = document.getElementById('close-btn');
let cancelBtn = document.getElementById('cancel-btn');
let saveBtn = document.getElementById('save-btn');
let input = document.getElementById('blog-title');
let textarea = document.getElementById('blog-description');
let main = document.getElementById('blog-posts');

let arrayOfBlogposts = [];

// Open modal when Create a new post button is clicked
createBlogBtn.addEventListener("click", ()=>{
    modal.style.display = 'block';
});

// Closes modal when X button is clicked
closeBtn.addEventListener("click", function closeModal(){
    modal.style.display = 'none';
});

// Close modal when cancel post button is clicked
cancelBtn.addEventListener("click", function cancelPost(){
    modal.style.display = 'none';
});

// checks the input and textarea 
saveBtn.addEventListener("click",(event)=>{
    event.preventDefault();
    if (input.value.trim() === '' || textarea.value.trim() === '') {
        alert('Please fill in all fields');
        return;
    }
   else{
    const dateTime = new Date();
    let object ={input: input.value, textarea: textarea.value, dateTime: dateTime};
    arrayOfBlogposts.push(object);
    displayPost();
    input.value = '';
    textarea.value = '';
    

   }   
});

// function runs to show blogpost on website
function displayPost(){
    main.innerHTML = "";
    arrayOfBlogposts.forEach((blogPost, index)=>{
        let div = document.createElement('div');
        div.classList.add('blog-post');
        let heading = document.createElement('h2');
        heading.textContent= blogPost.input;
        let blog = document.createElement('p');
        blog.textContent = blogPost.textarea;
        let timeStamp = document.createElement('p');
        timeStamp.textContent =`Created on ${blogPost.dateTime.toLocaleString()}`;
        timeStamp.classList.add('dateTime');
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        
        // add event listener to delete button
        deleteBtn.addEventListener('click', () => {
            arrayOfBlogposts.splice(index, 1);
            displayPost();
        });
         
        div.appendChild(heading);
        div.appendChild(blog);
        div.appendChild(timeStamp);
        div.appendChild(deleteBtn);
        div.appendChild(editBtn);
        main.appendChild(div);
    });
}

