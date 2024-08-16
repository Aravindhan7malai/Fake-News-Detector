function detectFakeNews() {
    const newsText = document.getElementById('newsInput').value;
    const resultElement = document.getElementById('result');
    
    // Expanded keyword-based fake news detection
    const fakeKeywords = [
        'clickbait', 'scam', 'unreliable', 'fake', 'hoax', 
        'conspiracy', 'unverified', 'mind-control', 'martian colony'
    ];
    
    let isFake = false;
    fakeKeywords.forEach(keyword => {
        if (newsText.toLowerCase().includes(keyword)) {
            isFake = true;
        }
    });
    
    if (isFake) {
        resultElement.textContent = 'This news might be fake.';
        resultElement.style.color = 'red';
    } else {
        resultElement.textContent = 'This news seems to be real.';
        resultElement.style.color = 'green';
    }
}
