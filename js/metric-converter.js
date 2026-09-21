const convertButton = document.getElementById("convert-btn");
const output = document.getElementById("converter-output");

convertButton.addEventListener("click", function (event) {
  // stop the form from submitting/reloading the page
  event.preventDefault();

  // get the number from the input field
  let input_value = document.getElementById("value-input").value;
  let number = parseFloat(input_value);

  // get the selected conversion from the dropdown
  let select = document.getElementById("metric-converter").getElementsByTagName("select")[0];
  let conversion = select.options[select.selectedIndex].value;

  if (isNaN(number)) {
    output.innerHTML = "Please enter a valid number.";
    return;
  }

  let result;
  let fromUnit;
  let toUnit;

  if (conversion === "inch to centimeter") {
    result = number * 2.54;
    fromUnit = "inches";
    toUnit = "centimeters";
  } else if (conversion === "foot to centimeter") {
    result = number * 30.48;
    fromUnit = "feet";
    toUnit = "centimeters";
  } else if (conversion === "yard to meter") {
    result = number * 0.91;
    fromUnit = "yards";
    toUnit = "meters";
  } else if (conversion === "mile to kilometer") {
    result = number * 1.61;
    fromUnit = "miles";
    toUnit = "kilometers";
  } else if (conversion === "centimeter to inch") {
    result = number * 0.39;
    fromUnit = "centimeters";
    toUnit = "inches";
  } else if (conversion === "centimeter to foot") {
    result = number * 0.0328;
    fromUnit = "centimeters";
    toUnit = "feet";
  } else if (conversion === "meter to yard") {
    result = number * 1.09;
    fromUnit = "meters";
    toUnit = "yards";
  } else if (conversion === "kilometer to mile") {
    result = number * 0.62;
    fromUnit = "kilometers";
    toUnit = "miles";
  } else {
    output.innerHTML = "Please choose a valid conversion.";
    return;
  }

  result = result.toFixed(2);
  output.innerHTML = number + " " + fromUnit + " is " + result + " " + toUnit;
});