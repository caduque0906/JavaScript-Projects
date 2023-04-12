//Creates an object to keep track of values.
const Calculator = {
    //This will display 0 on the calculator screen.
    Display_Value: '0',
    //This will hold the first operand for any expressions, we set it to null for now.
    First_Operand: null,
    //This checks whether or not the second operand has been inputted by the user.
    Wait_Second_Operand: false,
    //This will hold the operator, we set it to null for now.
    operator: null,
};

//This modifies values each time a button is clicked on.
function Input_Digit(digit) {
    const {Display_Value, Wait_Second_Operand, } = Calculator;
    //This checks if the Wait_Second_Operand is true and sets Display_Value to the key that was clicked on.
    if (Wait_Second_Operand === true) {
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    } else {
        //This overwrites Display_Value if the current value is 0 otherwise it adds onto it.
        Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;
    }
}

//This section handles decimal points.
function Input_Decimal(dot) {
    //This ensuresthat accidental clicking of the decimal point doesn't cause bugs in the operation.
    if (Calculator.Wait_Second_Operand === true) return;
    if (!Calculator.Display_Value.includes(dot)) {
        Calculator.Display_Value += dot;
    }
}

//This section hnadles operators
function Handle_Operator(Next_Operator) {
    const {First_Operand, Display_Value, operator} = Calculator;
    const Value_of_Input = parseFloat(Display_Value);
    if (operator && Calculator.Wait_Second_Operand) {
        Calculator.operator = Next_Operator;
        return;
    }
    if (First_Operand == null) {
        Calculator.First_Operand = Value_of_Input;
    } else if (operator) {
        const Value_Now = First_Operand || 0;
        let result = Perform_Calculation[operator](Value_Now, Value_of_Input);
        result = Number(result).toFixed (9);
        result = (result *1).toString();
        Calculator.Display_Value = parseFloat(result);
        Calculator.First_Operand = parseFloat(result);
    }
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}

const Perform_Calculation = {
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    '=': (First_Operand, Second_Operand) => Second_Operand
};

function Calculator_Reset() {
    Calculator.Display_Value = '0';
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}

//This function updates the calculator screen with the contents of Display_Value
function Update_Display() {
    //Makes use of the calculator-screen class to target the input tag in the HTML document
    const display = document.querySelector('.calculator-screen');
    display.value = Calculator.Display_Value;
}

Update_Display();
//This section monitors button clicks
const keys = document.querySelector('calculator-keys');
keys.addEventListener('click', (event) => {
    const { target } = event;
    if (!target.matches('button')) {
        return;
    }
    if (target.classList.contains('operator')) {
        Handle_Operator(target.value);
        Update_Display();
        return
    }
    if (target.classList.contains('decimal')) {
        Input_Decimal(target.value);
        Update_Display();
        return;
    }
    if (target.classList.contains('all-clear')) {
        Calculator_Reset();
        Update_Display();
        return;
    }
    Input_Digit(target.value);
    Update_Display();
})