import React from "react";
import LinkExternal from "./LinkExternal";
import Text from "./Text";

export default function Footer() {
  return (
    <div className="footer-container">
      <Text type="paragraph" style={{ textAlign: "center" }}>
        &copy; Create by{" "}
        <LinkExternal link="https://teguhbagasm.vercel.app/">Teguh Bagas Mardiansyah</LinkExternal>
      </Text>
    </div>
  );
}
