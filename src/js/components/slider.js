// Слайдер карточек
class Slider {
    constructor() {
        this.track = document.getElementById('sliderTrack');
        this.prevBtn = document.getElementById('prevSlide');
        this.nextBtn = document.getElementById('nextSlide');
        
        // Проверяем существование основных элементов
        if (!this.track || !this.prevBtn || !this.nextBtn) {
            console.error('Не найдены необходимые элементы для слайдера');
            return;
        }
        
        this.currentSlide = 0;
        this.totalSlides = 6;
        
        this.init();
    }
    
    init() {
        if (!this.track) return;
        
        // Навигация по кнопкам
        this.prevBtn.addEventListener('click', () => this.prevSlide());
        this.nextBtn.addEventListener('click', () => this.nextSlide());
        
        // Навигация по стрелкам клавиатуры
        document.addEventListener('keydown', (e) => {
            if (window.innerWidth <= 1250) {
                if (e.key === 'ArrowLeft') {
                    this.prevSlide();
                } else if (e.key === 'ArrowRight') {
                    this.nextSlide();
                }
            }
        });
        
        // Свайпы для мобильных устройств
        this.addTouchEvents();
        
        // Инициализируем позицию
        this.updateSlider();
    }
    
    nextSlide() {
        if (this.currentSlide < this.totalSlides - 1) {
            this.currentSlide++;
        } else {
            this.currentSlide = 0; // Зацикливание
        }
        this.updateSlider();
    }
    
    prevSlide() {
        if (this.currentSlide > 0) {
            this.currentSlide--;
        } else {
            this.currentSlide = this.totalSlides - 1; // Зацикливание
        }
        this.updateSlider();
    }
    
    updateSlider() {
        const translateX = -this.currentSlide * (100 / this.totalSlides);
        this.track.style.transform = `translateX(${translateX}%)`;
    }
    
    addTouchEvents() {
        let startX = 0;
        let endX = 0;
        
        this.track.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });
        
        this.track.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            this.handleSwipe(startX, endX);
        });
    }
    
    handleSwipe(startX, endX) {
        const threshold = 50; // Минимальное расстояние для свайпа
        const diff = startX - endX;
        
        if (Math.abs(diff) > threshold) {
            if (diff > 0) {
                // Свайп влево - следующий слайд
                this.nextSlide();
            } else {
                // Свайп вправо - предыдущий слайд
                this.prevSlide();
            }
        }
    }
}

// Инициализация слайдера при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    new Slider();
});
