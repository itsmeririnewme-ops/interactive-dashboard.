# Interactive Productivity Dashboard

This project is a web-based dashboard built for WEB-115 to demonstrate interactive JavaScript features.

## TODO: Future Enhancements
- [x] Add a metric conversion tool.
- [ ] Integrate a task list with array storage.
- [ ] Add JavaScript logic for a live clock.
- [x] Add a weekly task goal calculator

## Weekly Task Goals

Through this feature, a user can input their name, a daily goal for task completion, and any weekly bonus tasks. The calculation happens when the user clicks the calculate button. JavaScript multiplies the daily goal by five workdays to arrive at a basic weekly goal, which is then summed with the bonus tasks to get the total.

## Imperial/Metric Converter

This app converts a number between US (Imperial) and Metric units. It supports inches, feet, yards, and miles, as well as centimeters, meters, and kilometers. The user enters a value, picks a conversion, and clicks a button to see the result.

### Logic and Pseudocode
```
BEGIN MetricConverter

    INPUT value
    INPUT conversion
    SET number = value converted to a decimal number

    IF number is not a valid number THEN
        DISPLAY "Please enter a valid number."
    ELSE
        IF conversion = "inch to centimeter" THEN
            SET result = number * 2.54
            SET unit = "cm"
        ELSE IF conversion = "foot to centimeter" THEN
            SET result = number * 30.48
            SET unit = "cm"
        ELSE IF conversion = "yard to meter" THEN
            SET result = number * 0.91
            SET unit = "m"
        ELSE IF conversion = "mile to kilometer" THEN
            SET result = number * 1.61
            SET unit = "km"
        ELSE IF conversion = "centimeter to inch" THEN
            SET result = number * 0.39
            SET unit = "in"
        ELSE IF conversion = "centimeter to foot" THEN
            SET result = number * 0.0328
            SET unit = "ft"
        ELSE IF conversion = "meter to yard" THEN
            SET result = number * 1.09
            SET unit = "yd"
        ELSE IF conversion = "kilometer to mile" THEN
            SET result = number * 0.62
            SET unit = "mi"
        ELSE
            DISPLAY "Please choose a valid conversion."
            END
        END IF

        SET result = result rounded to 2 decimal places
        DISPLAY number + " converts to " + result + " " + unit
    END IF

END
```