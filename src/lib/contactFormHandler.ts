import { actions, isInputError } from "astro:actions";

const sendBtn = document.querySelector<HTMLButtonElement>(
  "button[data-send-button]",
);
const loaderIcon = document.querySelector<HTMLSpanElement>("span[data-loader]");
const sendText = document.querySelector<HTMLSpanElement>(
  "span[data-send-text]",
);

function showLoader() {
  sendText?.classList.add("opacity-0", "scale-90");
  sendText?.classList.remove("opacity-100", "scale-100");
  loaderIcon?.classList.add("opacity-100", "scale-100");
  loaderIcon?.classList.remove("opacity-0", "scale-90");
}

function showText(label: string) {
  loaderIcon?.classList.add("opacity-0", "scale-90");
  loaderIcon?.classList.remove("opacity-100", "scale-100");
  sendText?.classList.add("opacity-100", "scale-100");
  sendText?.classList.remove("opacity-0", "scale-90");
  if (sendText) sendText.textContent = label;
}

export async function handleContactSubmit(form: HTMLFormElement) {
  if (sendBtn) sendBtn.disabled = true;
  showLoader();

  const formData = new FormData(form);
  const { error } = await actions.sendMail(formData);

  if (isInputError(error)) {
    if (sendBtn) sendBtn.disabled = false;
    showText("send");

    for (const [field, messages] of Object.entries(error.fields)) {
      const errorElement = form.querySelector(`#${field}-field`);
      if (!errorElement) continue;

      errorElement.textContent = messages.join(", ");
      errorElement.classList.remove("opacity-0", "scale-95");
      errorElement.classList.add("opacity-100", "scale-100");

      setTimeout(() => {
        errorElement.classList.remove("opacity-100", "scale-100");
        errorElement.classList.add("opacity-0", "scale-95");
      }, 4000);
    }
    return;
  }

  if (error) {
    if (sendBtn) sendBtn.disabled = false;
    showText("Message Failed :(");
    setTimeout(() => showText("send"), 3000);
    console.error("Something Went Wrong");
    return;
  }

  if (sendBtn) sendBtn.disabled = false;
  showText("Message Sent :)");
  setTimeout(() => showText("send"), 3000);
  form.reset();
}
