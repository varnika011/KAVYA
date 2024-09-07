<?php

// check if the form has been submitted
if ($_SERVER['REQUEST_METHOD'] == 'POST') {

  // get the form data
  $name = $_POST['name'];
  $email = $_POST['email'];
  $password = $_POST['password'];
  $plan = $_POST['plan'];

  // validate the form data
  $errors = array();
  if (empty($name)) {
    $errors[] = 'Name is required';
  }
  if (empty($email)) {
    $errors[] = 'Email is required';
  }
  if (empty($password)) {
    $errors[] = 'Password is required';
  }
  if (empty($plan)) {
    $errors[] = 'Plan selection is required';
  }

  // if there are no errors, process the subscription
  if (empty($errors)) {

    // TODO: add code to process the subscription here

    // display a success message
    echo '<p>Thank you for subscribing!</p>';

  } else {

    // display the form with errors
    echo '<ul>';
    foreach ($errors as $error) {
      echo '<li>' . $error . '</li>';
    }
    echo '</ul>';

  }

} else {

  // display the form
  echo '
    <form method="post">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required>
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required>
      <label for="password">Password:</label>
      <input type="password" id="password" name="password" required>
      <label for="plan">Choose a Plan:</label>
      <select id="plan" name="plan" required>
        <option value="">--Select a Plan--</option>
        <option value="basic">Basic</option>
        <option value="premium">Premium</option>
        <option value="ultimate">Ultimate</option>
      </select>
      <button type="submit">Subscribe</button>
    </form>
  ';

}

?>
