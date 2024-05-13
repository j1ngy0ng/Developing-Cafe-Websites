document.addEventListener("DOMContentLoaded", function () {
    const commentForm = document.getElementById('commentForm');
    commentForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const rating = document.getElementById('rating').value;
        const commentText = document.getElementById('commentText').value;

        // Create New Comment
        const newComment = document.createElement('div');
        newComment.classList.add('comment');
        newComment.innerHTML = `
            <h3>${name}</h3>
            <div class="stars">${"★".repeat(rating)}</div>
            <p>${commentText}</p>
            <button class="like-button">👍 Like</button>
            <span class="like-count">0</span>
            <button class="dislike-button">👎 Dislike</button>
            <span class="dislike-count">0</span>
        `;

        // Insert comment to comment list
        const commentsContainer = document.querySelector('.comments');
        commentsContainer.appendChild(newComment); 

        // Clear Form
        commentForm.reset();
    });

    const commentsContainer = document.querySelector('.comments');
    commentsContainer.addEventListener('click', function (e) {
        if (e.target.classList.contains('like-button')) {
            const likeCountElement = e.target.parentElement.querySelector('.like-count');
            let currentLikeCount = parseInt(likeCountElement.textContent);
            currentLikeCount++;
            likeCountElement.textContent = currentLikeCount;
        }
        
        if (e.target.classList.contains('dislike-button')) {
            const dislikeCountElement = e.target.parentElement.querySelector('.dislike-count');
            let currentDislikeCount = parseInt(dislikeCountElement.textContent);
            currentDislikeCount++;
            dislikeCountElement.textContent = currentDislikeCount;
        }
    });

   const closeFormButton = document.getElementById('closeFormButton');
   const openFormButton = document.createElement('button');
   openFormButton.textContent = "Add a Review";
   openFormButton.classList.add('fixed-button'); 


   function hideFormAndShowButton() {
       document.querySelector('.form-container').style.display = 'none';
       openFormButton.style.display = 'block';
       openFormButton.classList.add('fixed-button'); 
   }

   function showFormAndHideButton() {
       document.querySelector('.form-container').style.display = 'block';
       openFormButton.style.display = 'none';
       openFormButton.classList.remove('fixed-button'); 
   }

   closeFormButton.addEventListener('click', function () {
       hideFormAndShowButton();
   });

   openFormButton.addEventListener('click', function () {
       showFormAndHideButton();
   });

   document.getElementById('submit').addEventListener('click', () =>{
    hideFormAndShowButton();
   });

   const body = document.querySelector('body');
   body.appendChild(openFormButton);

});

