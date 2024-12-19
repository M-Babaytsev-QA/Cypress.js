describe('Тестирование авторизации', function () {

    
    it('Верный логин и пароль', function () {
        cy.visit('https://login.qa.studio/'); //Зашли на сайт
        cy.get('#mail').type('german@dolnikov.ru'); // Найти инпут логин и ввести верный логин
        cy.get('#pass').type('iLoveqastudio1'); // Найти инпут пароль и ввести верный пароль
        cy.get('#loginButton').click(); // Найти кнопку войти и нажать на неё
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // После автотеста вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю
        })

    it('Восстановление пароля', function () {
        cy.visit('https://login.qa.studio/'); //Зашли на сайт
        cy.get('#forgotEmailButton').click(); //Найти кнопку Забыли пароль? и нажать на неё
        cy.get('#mailForgot').type('german@dolnikov.ru'); // Найти инпут E-mail и ввести верный E-mail
        cy.get('#restoreEmailButton').click(); // Найти кнопку Отправить код и нажать на неё
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю
        })
        
        it('Верный логин и не верный пароль', function () {
            cy.visit('https://login.qa.studio/'); //Зашли на сайт
            cy.get('#mail').type('german@dolnikov.ru'); // Найти инпут логин и ввести верный логин
            cy.get('#pass').type('iLoveqastudio2'); // Найти инпут пароль и ввести Не верный пароль
            cy.get('#loginButton').click(); // Найти кнопку войти и нажать на неё
            cy.get('#messageHeader').contains('Такого логина или пароля нет'); // После автотеста вижу текст
            cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю
            })        
            
            it('Негативный кейс валидации', function () {
                cy.visit('https://login.qa.studio/'); //Зашли на сайт
                cy.get('#mail').type('germandolnikov.ru'); // Найти инпут логин и ввести верный логин без @
                cy.get('#pass').type('iLoveqastudio1'); // Найти инпут пароль и ввести верный пароль
                cy.get('#loginButton').click(); // Найти кнопку войти и нажать на неё
                cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // После автотеста вижу текст
                cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
                cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю
                })        
               
        it('НЕ верный логин и верный пароль', function () {
            cy.visit('https://login.qa.studio/'); //Зашли на сайт
            cy.get('#mail').type('germans@dolnikov.ru'); // Найти инпут логин и ввести НЕ верный логин
            cy.get('#pass').type('iLoveqastudio1'); // Найти инпут пароль и ввести верный пароль
            cy.get('#loginButton').click(); // Найти кнопку войти и нажать на неё
            cy.get('#messageHeader').contains('Такого логина или пароля нет'); // После автотеста вижу текст
            cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю
            })        
       
    it('Проверк на приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/'); //Зашли на сайт
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // Найти инпут логин и ввести верный логин с заглавными буквами
        cy.get('#pass').type('iLoveqastudio1'); // Найти инпут пароль и ввести верный пароль
        cy.get('#loginButton').click(); // Найти кнопку войти и нажать на неё
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // После автотеста вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю
        })
          
})
// npx cypress run --spec cypress/e2e/authorization.cy.js --browser chrome