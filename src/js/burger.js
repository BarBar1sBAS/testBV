// Бургер меню
class BurgerMenu {
    constructor() {
        this.burgerMenu = document.getElementById('burgerMenu');
        this.closeBtn = document.getElementById('closeBurgerMenu');
        this.burgerIcon = document.querySelector('.header__burger');
        
        // Проверяем существование основных элементов
        if (!this.burgerMenu || !this.closeBtn || !this.burgerIcon) {
            console.error('Не найдены необходимые элементы для бургер-меню');
            return;
        }
        
        this.overlay = this.burgerMenu.querySelector('.burger-menu__overlay');
        
        this.init();
    }
    
    init() {
        // Открытие бургер-меню
        if (this.burgerIcon) {
            this.burgerIcon.addEventListener('click', () => this.open());
        }
        
        // Закрытие бургер-меню
        if (this.closeBtn) {
            this.closeBtn.addEventListener('click', () => this.close());
        }
        
        if (this.overlay) {
            this.overlay.addEventListener('click', () => this.close());
        }
        
        // Закрытие по ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.burgerMenu && this.burgerMenu.classList.contains('burger-menu--open')) {
                this.close();
            }
        });
        
        // Закрытие при клике на ссылки меню
        if (this.burgerMenu) {
            const menuLinks = this.burgerMenu.querySelectorAll('.burger-menu__nav-link');
            menuLinks.forEach(link => {
                link.addEventListener('click', () => this.close());
            });
        }
    }
    
    open() {
        if (!this.burgerMenu) return;
        
        this.burgerMenu.classList.add('burger-menu--open');
        document.body.style.overflow = 'hidden';
        
        // Анимация бургер-иконки
        this.animateBurgerIcon(true);
    }
    
    close() {
        if (!this.burgerMenu) return;
        
        this.burgerMenu.classList.remove('burger-menu--open');
        document.body.style.overflow = '';
        
        // Анимация бургер-иконки
        this.animateBurgerIcon(false);
    }
    
    animateBurgerIcon(isOpen) {
        if (!this.burgerIcon) return;
        
        const spans = this.burgerIcon.querySelectorAll('span');
        
        if (spans.length >= 3) {
            if (isOpen) {
                // Превращаем в крестик
                spans[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
            } else {
                // Возвращаем в исходное состояние
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        }
    }
}

// Инициализация бургер-меню при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    new BurgerMenu();
});
