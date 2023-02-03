/* eslint-disable import/prefer-default-export */

type NameImage =
  | "affiliate.svg"
  | "aframerican-man-in-vr.jpg"
  | "businessman-running.png"
  | "debenture-icon.svg"
  | "error-404.png"
  | "fundo-de-investimentos-icon.svg"
  | "illustration-metaverse.png"
  | "illustration.png"
  | "logo_footer.png"
  | "logo-metacore.svg"
  | "product.svg"
  | "security.svg"
  | "young-bearded-man.jpg"
  | "young-girl-experience-vr.jpg";

export const urlImage = (name: NameImage) =>
  `https://metacore-assets.s3.amazonaws.com/landing-page/images/${name}`;
