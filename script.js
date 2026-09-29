// Перемикання вкладок сайту
function switchTab(tabName) {
    // Ховаємо всі контентні секції
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));

    // Прибираємо активний клас у всіх кнопок меню
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => item.classList.remove('active'));

    // Показуємо вибрану вкладку
    const activeTab = document.getElementById(`tab-${tabName}`);
    if (activeTab) {
        activeTab.classList.add('active');
    }

    // Виділяємо активну кнопку в меню
    event.currentTarget.classList.add('active');
}

// Функція запуску лаунчера з сайту
function launchGame() {
    // Викликаємо наш власний протокол Windows
    window.location.href = "mclauncher://launch";
}