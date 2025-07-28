"use server"

export type FormState = {
  message: string
  status: "success" | "error" | "idle"
}

export async function submitContactForm(prevState: FormState, formData: FormData): Promise<FormState> {
  const name = formData.get("name")
  const email = formData.get("email")
  const service = formData.get("service_type")
  const message = formData.get("message")

  // Basic validation
  if (!name || !email || !service || !message) {
    return {
      message: "All fields are required.",
      status: "error",
    }
  }

  // Simulate sending an email or saving to a database
  console.log("New Contact Form Submission:")
  console.log({ name, email, service, message })

  await new Promise((resolve) => setTimeout(resolve, 1500))

  // In a real app, you would handle potential errors from your email service
  const success = true

  if (success) {
    return {
      message: "Thank you for your message! We will get back to you shortly.",
      status: "success",
    }
  } else {
    return {
      message: "Sorry, something went wrong. Please try again later.",
      status: "error",
    }
  }
}
