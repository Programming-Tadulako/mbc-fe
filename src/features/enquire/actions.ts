"use server";

export async function submitEnquiry(
  _prevState: { success: boolean } | null,
  formData: FormData
) {
  const email = formData.get("email");
  await new Promise((resolve) => setTimeout(resolve, 1000));
  if (!email) return { success: false };
  return { success: true };
}
