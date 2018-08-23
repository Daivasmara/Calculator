new Vue({
  el: '#app',
  data: {
    display: '',
    operators: '',
    number1: '',
    number2: ''
  },
  methods: {
    append: function(number){
      this.display += number
    },
    zero: function(){
      if (this.display === '' || this.display === '0') {
        this.display = this.display
      } else {
        this.append('0')
      }
    },
    dot: function(){
      if (this.display === '') {
        this.append('0'),
        this.append('.')
      } else if (this.display.indexOf('.') === -1) {
        this.append('.')
      }
    },
    ac: function(){
      this.display = '',
      this.operators = '',
      this.number1 = '',
      this.number2 = ''
    },
    backspace: function(){
      this.display = this.display.slice(0, -1)
    },
    percent: function(){
      this.display = String(this.display/100),
      this.operators = '%'
    },
    division: function(){
      this.number1 = this.display,
      this.display = '',
      this.operators = '&#247;'
    },
    times: function(){
      this.number1 = this.display,
      this.display = '',
      this.operators = 'x'
    },
    substraction: function(){
      this.number1 = this.display,
      this.display = '',
      this.operators = '-'
    },
    plus: function(){
      this.number1 = this.display,
      this.display = '',
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
