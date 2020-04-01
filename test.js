const body = document.querySelector('.app')

class CounterComponent {
    
    constructor(count) {
        this.count = count;
    }
    
    click() {   
        let button = document.createElement("button");
        button.innerText = 'Click';
        body.append(button);
        let result =  button.addEventListener("click", event => {
            this.count + 1;
        });
        
        return result;
    }
      
      counter() {
          let html = `<h2 class="counter">${this.count}</h2>`;
          return html;
      }
    
}

let c = new CounterComponent(0);

let x = c.counter();
console.log(x);

let y = c.click();

console.log(y);
