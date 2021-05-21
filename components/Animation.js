import { keyframes } from "@emotion/react";

export const NavbarAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateX(-10vh);
  }

  to {
    opacity: 1;
    transform: translateX(0vh);
  }
`;

export const ArrowUpAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-5vh);
  }

  to {
    opacity: 1;
    transform: translateY(0vh);
  }
`;
