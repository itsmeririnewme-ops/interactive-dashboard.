// Calculates a user's total weekly task goal based on their daily goal and bonus tasks.
function weeklyGoal(userName, dailyGoal, bonusTasks) {
    // Weekly goal is based on 5 workdays per week
    let weeklyGoal = dailyGoal * 5;

    // Add bonus tasks to the weekly goal
    let totalGoal = weeklyGoal + bonusTasks;

    // Build the output message
    let output = "User: " + userName + "<br>" + "Total Weekly Goal: " + totalGoal;

    // Display the result inside the goal-message paragraph
    document.getElementById("goal-message").innerHTML = output;
}

// Run weeklyGoal() when the user clicks the goal-btn button
document.getElementById("goal-btn").addEventListener("click", function (event) {
    // Prevent the form from submitting and reloading the page
    event.preventDefault();

    // Grab values from the form fields
    let userName = document.getElementById("user-name").value;
    let dailyGoal = Number(document.getElementById("daily-goal").value);
    let bonusTasks = Number(document.getElementById("bonus-tasks").value);

    // Call the function with the user's input
    weeklyGoal(userName, dailyGoal, bonusTasks);
});