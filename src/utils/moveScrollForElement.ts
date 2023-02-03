import { RefObject } from "react";

export default function scrollToRef(ref: RefObject<HTMLDivElement>) {
  if (ref.current) {
    window.scrollTo({
      left: 0,
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  }
}
