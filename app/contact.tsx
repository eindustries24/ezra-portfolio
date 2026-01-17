"use client";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm("NEXT_PUBLIC_FORM");

  if (state.succeeded) {
    return <p>Thanks for your submission!</p>;
  }

  return (
    <div id="contact" className="flex flex-row gap-10">
      <div className="flex flex-col gap-2 md:w-[50%] shrink-0">
        <p className="font-bold text-3xl md:text-4xl">Get in touch</p>
        <p className="text-lg">{`If you have a project you'd like me to take a look at, don't hesitate to contact. I'd love to help you bring it to the best version it can be.`}</p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4"
      >
        <label htmlFor="name" className="label">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          className="input w-full"
          placeholder="Your name"
        />

        <label htmlFor="email" className="label">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className="input w-full"
          placeholder="your@email.com"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <label className="label">Message</label>
        <textarea
          id="message"
          name="message"
          className="textarea w-full"
          placeholder="Type your message"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button
          type="submit"
          disabled={state.submitting}
          className="btn btn-primary mt-4 rounded-full"
        >
          Send
        </button>
        <ValidationError errors={state.errors} />
      </form>
      {/* <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" />

        <input name="email" type="email" placeholder="Email" required />

        <textarea name="message" placeholder="Message" required />

        <button type="submit" disabled={status === "loading"}>
          Send
        </button>

        {status === "success" && <p>Message sent!</p>}
        {status === "error" && <p>Something went wrong.</p>}
      </form>{" "} */}
    </div>
  );
}
