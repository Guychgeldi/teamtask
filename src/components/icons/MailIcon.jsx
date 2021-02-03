function MailIcon(props) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="M5 5 H19 A2 2 0 0 1 21 7 V17 A2 2 0 0 1 19 19 H5 A2 2 0 0 1 3 17 V7 A2 2 0 0 1 5 5 z" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}

export default MailIcon;
