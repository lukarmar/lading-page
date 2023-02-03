/* eslint-disable no-console */
import sgMail from "@sendgrid/mail";

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY as string;
const COMMERCIAL_TEMPLATE_ID = process.env.COMMERCIAL_TEMPLATE_ID as string;
const CLIENT_TEMPLATE_ID = process.env.CLIENT_TEMPLATE_ID as string;
const FROM_SEND_EMAIL = process.env.FROM_SEND_EMAIL as string;
const TO_SEND_EMAIL_COMMERCIAL = process.env.TO_SEND_EMAIL_COMMERCIAL as string;

sgMail.setApiKey(SENDGRID_API_KEY);

interface PropsUser {
  email: string;
  name: string;
  phone: string;
}

interface PropsSendTo {
  [key: string]: any;
}

class EmailProvider {
  phone: string;

  name: string;

  email: string;

  fromEmail: string;

  constructor(user: PropsUser) {
    this.name = user.name;
    this.phone = user.phone;
    this.email = user.email;
    this.fromEmail = FROM_SEND_EMAIL;
  }

  setDataSendEmail(sendTo: string) {
    const from = { name: "MetaCore", email: this.fromEmail };

    const dataSendEmail: PropsSendTo = {
      commercial: () => {
        return {
          to: TO_SEND_EMAIL_COMMERCIAL,
          from,
          dynamicTemplateData: {
            name: this.name,
            email: this.email,
            phone: this.phone,
            subject: `Solicitação de Contato - [ ${this.name.toUpperCase()} ]`,
          },
          templateId: COMMERCIAL_TEMPLATE_ID,
        };
      },
      client: () => {
        return {
          to: this.email,
          from,
          dynamicTemplateData: {
            name: this.name,
            subject: "Solicitação de Contato",
          },
          templateId: CLIENT_TEMPLATE_ID,
        };
      },
    };

    return dataSendEmail[sendTo];
  }

  async sendMagicLink(sendTo: "commercial" | "client") {
    const mailOption = this.setDataSendEmail(sendTo);

    try {
      await sgMail.send(mailOption());
    } catch (error: any) {
      console.error(error.response.body);
    }
  }
}

export { EmailProvider };
