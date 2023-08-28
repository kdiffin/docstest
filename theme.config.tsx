import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: (
    <div
      style={{
        fontSize: "1.3rem",
        display: "flex",
        alignItems: "center",
        gap: "2px",
      }}
    >
      <svg
        width="30"
        height="30"
        viewBox="0 0 62 62"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="30.8762"
          cy="30.8762"
          r="30.8762"
          transform="matrix(-1 0 0 1 61.7539 0)"
          fill="black"
        />
        <path
          d="M30.6603 52.2892C30.8187 52.3429 30.974 52.3422 31.1319 52.2871C33.1631 51.5784 47.6484 45.9641 47.6484 29.9788V15.5288C47.6484 15.1465 47.3869 14.8132 47.014 14.7205L31.0996 10.7627C30.9662 10.7295 30.8267 10.7295 30.6933 10.7627C30.5599 10.7958 14.7789 14.7205 14.7789 14.7205C14.406 14.8132 14.1445 15.1465 14.1445 15.5288V29.9788C14.1445 46.1255 28.6266 51.6001 30.6603 52.2892Z"
          fill="white"
        />
        <path
          d="M20.8708 20.654C22.1525 19.2483 23.7155 18.1276 25.4582 17.3648C27.2009 16.6019 29.0845 16.2139 30.9869 16.2259C32.8892 16.2378 34.7678 16.6494 36.5008 17.4341C38.2338 18.2188 39.7826 19.3589 41.0466 20.7806L30.9017 29.8005L20.8708 20.654Z"
          fill="url(#paint0_radial_1_11691)"
        />
        <defs>
          <radialGradient
            id="paint0_radial_1_11691"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(30.9017 29.8005) rotate(-90.0445) scale(29.9638)"
          >
            <stop offset="0.220303" />
            <stop offset="0.995966" stop-opacity="0" />
          </radialGradient>
        </defs>
      </svg>

      <p style={{ fontWeight: "600" }}>TrustAuthX</p>
    </div>
  ),

  project: {
    link: "https://github.com/One-Click-Auth/Docs",
  },

  chat: {
    link: "https://discord.gg/5wAVfW8c",
  },

  docsRepositoryBase: "https://github.com/One-Click-Auth/Docs/tree/main/",

  footer: {
    text: (
      <span>
        Made with ❤ by the team at{" "}
        <a className="underline " href="https://github.com/One-Click-Auth/">
          @TrustAuthX.
        </a>
      </span>
    ),
  },

  editLink: {
    text: <div className="text-lg">Edit this page</div>,
  },

  feedback: {
    content: <div className="text-lg">Question? Give us feedback →</div>,
  },

  useNextSeoProps() {
    return {
      titleTemplate: "%s – TrustAuthX",
    };
  },

  primaryHue: 83,

  search: {
    placeholder: "Search documentation...",
  },
};

export default config;
