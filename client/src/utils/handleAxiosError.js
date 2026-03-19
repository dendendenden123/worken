// src/utils/handleAxiosError.js
export function getAxiosError(err) {
  if (err.response) {
    const status = err.response.status;
    const serverMessage = err.response.data?.message;

    if (status === 400) return serverMessage || "Please fill in all fields.";
    if (status === 401) return "Invalid email or password.";
    if (status === 403) return "You don't have permission to do that.";
    if (status === 404) return "User not found.";
    if (status === 422) return serverMessage || "Invalid data submitted.";
    if (status === 500) return "Server error. Please try again later.";

    return serverMessage || "Something went wrong.";    
  }

  if (err.request) return "Cannot reach the server. Check your connection.";

  return "An unexpected error occurred.";
}