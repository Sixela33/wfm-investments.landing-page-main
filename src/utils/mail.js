const MAIL_APIKEY_PUBLIC = process.env.MAIL_APIKEY_PUBLIC;
const MAIL_APIKEY_PRIVATE = process.env.MAIL_APIKEY_PRIVATE;
const MAIL_API_URL = process.env.MAIL_API_URL;
const MAIL_FROM = process.env.MAIL_FROM;
const MAIL_NAME = process.env.MAIL_NAME;

export class Mail {
  /** @type {(props: { email: string, name: string, subject: string, body: string }) => Promise<Response>} */
  static send(props) {
    const credentials = Buffer.from(
      `${MAIL_APIKEY_PUBLIC}:${MAIL_APIKEY_PRIVATE}`
    ).toString("base64");

    return fetch(`${MAIL_API_URL}/send`, {
      method: "POST",
      mode: "no-cors",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `Basic ${credentials}`,
      }),
      body: JSON.stringify([
        {
          From: {
            Email: props.email,
            Name: props.name,
          },
          To: [
            {
              Email: MAIL_FROM,
              Name: MAIL_NAME,
            },
          ],
          Subject: props.subject,
          TextPart: props.body,
          HTMLPart: "",
        },
      ]),
    });
  }
}
