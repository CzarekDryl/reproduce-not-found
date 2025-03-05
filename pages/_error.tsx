import type { NextPage } from "next";
import NextErrorComponent, { ErrorProps } from "next/error";

const CustomErrorPage: NextPage<ErrorProps> = (props) => (
  <NextErrorComponent {...props} withDarkMode={false} />
);

export default CustomErrorPage;
