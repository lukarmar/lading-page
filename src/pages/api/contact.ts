// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";

import { PropsDataInputs } from "types/index";
import { EmailProvider } from "utils/emailProvider";

const handler = nc();

handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, email, phone } = req.body;

  const dataUser: PropsDataInputs = {
    name,
    email,
    phone,
  };

  const emailProvider = new EmailProvider(dataUser);

  try {
    await Promise.all([
      emailProvider.sendMagicLink("commercial"),
      emailProvider.sendMagicLink("client"),
    ]);

    return res.status(200).json({
      success: true,
      message: "Check your email.",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error sending email.",
    });
  }
});

export default handler;
