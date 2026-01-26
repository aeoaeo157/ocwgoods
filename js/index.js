//index.js

const scrollTop = document.getElementById('scrollTop');

    window.addEventListener('scroll', () => {
        // 스크롤 값이 200보다 커지면 show 클래스 추가
        if (window.scrollY > 200) { 
            scrollTop.classList.add('show');
            console.log("버튼 보임"); // 디버깅용: 콘솔창에 찍히는지 확인
        } else {
            scrollTop.classList.remove('show');
        }
    });

    scrollTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });












