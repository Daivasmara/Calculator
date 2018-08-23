new Vue({
  el: '#app',
  data: {
    display: '0',
    operators: '',
    number1: '',
    number2: ''
  },
  methods: {
    append: function(number){
      if (this.display === '0'){
        this.display = '',
        this.display += number
      } else if (this.display === 'Infinity') {
        this.display = '',
        this.display += number
      } else {
        this.display += number
      }
    },
    dot: function(){
      if (this.display === '0') {
        this.append('0.')
      } else if (this.display.indexOf('.') === -1) {
        this.append('.')
      }
    },
    ac: function(){
      this.display = '0',
      this.operators = '',
      this.number1 = '',
      this.number2 = ''
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
      this.display = '0',
      this.operators = '&#247;'
    },
    times: function(){
      this.number1 = this.display,
      this.display = '0',
      this.operators = 'x'
    },
    substraction: function(){
      this.number1 = this.display,
      this.display = '0',
      this.operators = '-'
    },
    plus: function(){
      this.number1 = this.display,
      this.display = '0',
      this.operators = '+'
    },
    result: function(){
      this.number2 = this.display,
      this.operators === '+' ? this.display = String(parseFloat(this.number1)+parseFloat(this.number2)) :
      this.operators === '-' ? this.display = String(parseFloat(this.number1)-parseFloat(this.number2)) :
      this.operators === '&#247;' ? this.display =  String(parseFloat(this.number1)/parseFloat(this.number2)) :
      this.operators === 'x' ? this.display =  String(parseFloat(this.number1)*parseFloat(this.number2)) :
      this.display,
      this.operators = ''
    }
  }
});
