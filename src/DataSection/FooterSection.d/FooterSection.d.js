// data.js
export const logoSvg = `
 <svg class="w-full h-full block" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="321" height="132" viewBox="0 0 321 132">
  <defs>
    <style>
      .cls-1 {
        filter: url(#filter);
      }

      .cls-2 {
        font-size: 11.317px;
        font-family: Rubik;
        font-weight: 500;
      }
    </style>
    <filter id="filter" filterUnits="userSpaceOnUse">
      <feFlood result="flood" flood-color="#fff"/>
      <feComposite result="composite" operator="in" in2="SourceGraphic"/>
      <feBlend result="blend" in2="SourceGraphic"/>
    </filter>
  </defs>
  <g class="cls-1">
    <g>
      <image id="x_black" width="117" height="132" xlink:href="data:img/png;base64,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"/>
      <text id="bots" class="cls-2" transform="translate(108.251 106.976) scale(9.108)">bots</text>
    </g>
  </g>
</svg>

`;

export const navLinks = [
  { label: "Features", href: "#" },
  { label: "About", href: "#" },
  { label: "Blog", href: "#" },
];

export const socialLinks = [
  {
    href: "#",
    svg: `
      <svg
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        class="w-24 h-24"
      >
        <g clip-path="url(#linkedin_svg__a)">
          <path
            d="M0 0v24h24V0H0Zm8 19H5V8h3v11ZM6.5 6.732c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764ZM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.397-2.586 7-2.777 7 2.476V19Z"
            fill="#fff"
          />
        </g>
        <defs>
          <clipPath id="linkedin_svg__a">
            <rect
              width="24"
              height="24"
              rx="2"
              fill="#fff"
            />
          </clipPath>
        </defs>
      </svg>
    `,
  },
  // Add more social links with SVGs if needed
];

export const termLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms & Conditions", href: "#" },
  // Add more term links if needed
];
