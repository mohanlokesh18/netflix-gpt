export const validateSignInUp = (email, password) => {
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );
  if (!isEmailValid) return "Email is invalid";
  if (!isPasswordValid)
    return "Password is invalid - should contain uppercase, lower case and special char with length atlease 8 char";

  return null;
};
