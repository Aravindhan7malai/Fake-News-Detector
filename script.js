function detectFakeNews() {
    const newsText = document.getElementById('newsInput').value;
    const resultElement = document.getElementById('result');
    const scoreElement = document.getElementById('score');
    
    const fakeKeywordsContent = [
        'clickbait', 'scam', 'unreliable', 'fake', 'hoax', 
        'conspiracy', 'unverified', 'mind-control', 'martian colony'
    ];

    const fakeKeywordsTitle = [
        'shocking', 'you won’t believe', 'top secret', 'exclusive', 
        'breaking', 'scandal', 'urgent'
    ];

    const fakeKeywordsURL = [
        'fakenews.com', 'scamalerts.net', 'clickbait.site', 'hoaxweb.org'
    ];

    let isFake = false;
    let score = 0;
    let selectedOption = document.querySelector('input[name="option"]:checked').value;

    if (selectedOption === 'content' || selectedOption === 'any') {
        fakeKeywordsContent.forEach(keyword => {
            if (newsText.toLowerCase().includes(keyword)) {
                isFake = true;
                score += 10;
            }
        });
    }

    if (selectedOption === 'title' || selectedOption === 'any') {
        fakeKeywordsTitle.forEach(keyword => {
            if (newsText.toLowerCase().includes(keyword)) {
                isFake = true;
                score += 10;
            }
        });
    }

    if (selectedOption === 'url' || selectedOption === 'any') {
        fakeKeywordsURL.forEach(keyword => {
            if (newsText.toLowerCase().includes(keyword)) {
                isFake = true;
                score += 10;
            }
        });
    }

    if (isFake) {
        resultElement.textContent = 'This news might be fake.';
        resultElement.style.color = 'red';
        scoreElement.className = 'fake';
        scoreElement.textContent = `Confidence Score: ${score}%`;
    } else {
        resultElement.textContent = 'This news seems to be real.';
        resultElement.style.color = 'green';
        scoreElement.className = 'real';
        score = 100; // Assuming 100% accuracy for simplicity
        scoreElement.textContent = `Confidence Score: ${score}%`;
    }
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

function addComment() {
    const commentInput = document.getElementById('commentInput');
    const commentsList = document.getElementById('commentsList');
    
    const newComment = document.createElement('div');
    newComment.textContent = commentInput.value;
    newComment.className = 'comment';
    
    commentsList.appendChild(newComment);
    commentInput.value = ''; // Clear the input field
}
