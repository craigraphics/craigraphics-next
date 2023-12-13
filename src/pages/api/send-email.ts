import type { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.sendGridAPIKey!);

type RequestBody = {
  email: string;
  message: string;
};

type ResponseData = {
  message: string;
};

export default async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { email, message }: RequestBody = req.body;

  const msg = {
    to: process.env.fromMail!,
    from: process.env.toMail!,
    subject: "New Message from craigraphics.com",
    text: email + " " + message,
  };

  try {
    await sgMail.send(msg);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error: any) {
    console.error(error);

    if (error.response) {
      console.error(error.response.body);
    }

    res.status(500).json({ message: "Error sending email" });
  }
};
