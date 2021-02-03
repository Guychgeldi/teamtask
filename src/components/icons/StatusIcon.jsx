function StatusIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M16.5 11L13 7.5l1.4-1.4 2.1 2.1L20.7 4l1.4 1.4-5.6 5.6M11 7H2v2h9V7m10 6.4L19.6 12 17 14.6 14.4 12 13 13.4l2.6 2.6-2.6 2.6 1.4 1.4 2.6-2.6 2.6 2.6 1.4-1.4-2.6-2.6 2.6-2.6M11 15H2v2h9v-2z" />
    </svg>
  );
}

export default StatusIcon;