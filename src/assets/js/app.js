new Vue({
  el: '#app',
  data: {
    display: '0',
    operators: '',
    number1: '0',
    number2: '0',
    calculation: false
  },
  methods: {
    append: function(number){
      if (this.display === '0' || this.display === 'Infinity' || this.display === 'NaN'){
        this.display = '',
        this.display += number
      } else if (this.calculation === true) {
        this.display = '',
        this.display += number,
        this.calculation = false
      } else {
        this.display += number
      }
    },
    dot: function(){
      if (this.display === '0' || this.calculation === true) {
        this.append('0.')
      } else if (this.display.indexOf('.') === -1) {
        this.append('.')
      }
    },
    ac: function(){
      this.display = '0',
      this.operators = '',
      this.number1 = '0',
      this.number2 = '0',
      this.calculation = false
    },
    backspace: function(){
      this.display = this.display.slice(0, -1),
      this.display === '' ? this.display = '0' : void(0)
    },
    percent: function(){
      this.display = String(this.display/100),
      this.operators = '%'
    },
    division: function(){
      this.number1 = this.display,
      this.calculation = true,
      this.operators = '&#247;'
    },
    times: function(){
      this.number1 = this.display,
      this.calculation = true,
      this.operators = 'x'
    },
    substraction: function(){
      this.number1 = this.display,
      this.calculation = true,
      this.operators = '-'
    },
    plus: function(){
      this.number1 = this.display,
      this.calculation = true,
      this.operators = '+'

    },
    result: function(){
      this.number2 = this.display,
      this.operators === '+' ? this.display = String(parseFloat(this.number1)+parseFloat(this.number2)) :
      this.operators === '-' ? this.display = String(parseFloat(this.number1)-parseFloat(this.number2)) :
      this.operators === '&#247;' ? this.display =  String(parseFloat(this.number1)/parseFloat(this.number2)) :
      this.operators === 'x' ? this.display =  String(parseFloat(this.number1)*parseFloat(this.number2)) :
      this.display,
      this.operators = '',
      this.calculation = false
    }
  }
});
