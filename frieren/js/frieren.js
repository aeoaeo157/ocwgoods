//index.js

const scrollTop = document.getElementById('scrollTop');

// 1. 스크롤 위치에 따라 버튼 표시/숨김
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) { // 300px 이상 내려오면 표시
        scrollTop.classList.add('show');
    } else {
        scrollTop.classList.remove('show');
    }
});

// 2. 버튼 클릭 시 최상단으로 부드럽게 이동
scrollTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // 부드러운 스크롤 효과
    });
});













