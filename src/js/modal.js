// Модальное окно
class Modal {
    constructor() {
        this.modal = document.getElementById('modal');
        this.openBtn = document.getElementById('openModal');
        this.closeBtn = this.modal.querySelector('.modal__close');
        this.overlay = this.modal.querySelector('.modal__overlay');
        
        this.init();
    }
    
    init() {
        // Открытие модального окна
        this.openBtn.addEventListener('click', () => this.open());
        
        // Закрытие модального окна
        this.closeBtn.addEventListener('click', () => this.close());
        this.overlay.addEventListener('click', () => this.close());
        
        // Закрытие по ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modal.classList.contains('modal--open')) {
                this.close();
            }
        });
    }
    
    open() {
        this.modal.classList.add('modal--open');
        document.body.style.overflow = 'hidden';
        
        // Анимация появления
        setTimeout(() => {
            this.modal.querySelector('.modal__content').style.transform = 'translate(-50%, -50%) scale(1)';
        }, 10);
    }
    
    close() {
        this.modal.classList.remove('modal--open');
        document.body.style.overflow = '';
        
        // Анимация исчезновения
        this.modal.querySelector('.modal__content').style.transform = 'translate(-50%, -50%) scale(0.8)';
    }
}

// Инициализация модального окна при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    new Modal();
});
