document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#home') {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            } else {
                const target = document.querySelector(targetId);
                if (target) {
                    const navHeight = document.querySelector('nav').offsetHeight;
                    const targetPosition = target.offsetTop - navHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    const iconButton = document.querySelector('.iconbutton');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            iconButton.style.display = 'flex';
        } else {
            iconButton.style.display = 'none';
        }
    });
});

function addRecommendation() {
    let recommendation = document.getElementById("new_recommendation");
    let recommenderName = document.getElementById("recommender_name");
    
    if (recommendation.value != null && recommendation.value.trim() != "") {
        console.log("New recommendation added");
        
        showPopup(true);
        
        var element = document.createElement("div");
        element.setAttribute("class", "recommendation");
        
        const name = recommenderName.value.trim() !== "" ? recommenderName.value : "Anonymous";
        
        element.innerHTML = `
            <span>&#8220;</span>
            ${recommendation.value}
            <span>&#8221;</span>
            <p><strong>- ${name}</strong></p>
        `;
        
        document.getElementById("all_recommendations").appendChild(element); 
        
        recommendation.value = "";
        recommenderName.value = "";
    } else {
        alert("Please enter a recommendation message before submitting.");
    }
}

function showPopup(bool) {
    const popup = document.getElementById('popup');
    if (bool) {
        popup.style.visibility = 'visible';
        setTimeout(function() {
            showPopup(false);
        }, 3000);
    } else {
        popup.style.visibility = 'hidden';
    }
}

window.addEventListener('click', function(e) {
    const popup = document.getElementById('popup');
    if (e.target === popup) {
        showPopup(false);
    }
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        showPopup(false);
    }
});