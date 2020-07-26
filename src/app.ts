
export class MyApp {
    private updateWelcomeText() {
        document.getElementById('welcomeText').innerText = 'Welcome to CodeSpace!';
    }

    testMethod() {
        this.updateWelcomeText();
        console.log('Test method called');
    }
  }
  
  new MyApp().testMethod();