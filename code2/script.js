let item2 = document.getElementById('item2');
item2.addEventListener('click', function() {
    let parent = item2.parentNode;
    alert('Parent content: ' + parent.textContent);
    const previousSibling = item2.previousElementSibling;
    if (previousSibling) {
        console.log('Previous sibling:', previousSibling.textContent);
    }
    const nextSibling = item2.nextElementSibling;
    if (nextSibling) {
        console.log('Next sibling:', nextSibling.textContent);
    }
});