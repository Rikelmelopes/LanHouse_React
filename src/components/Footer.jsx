import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "SlateBlue",
      }}
      className=" position-fixed bottom-0 py-3 text-white text-center "
    >
      <p>
        Todos os direitos reservados® Feito por{" "}
        <a
          href="https://github.com/Rikelmelopes"
          style={{ textDecoration: "none", color: "#000" }}
        >
          Rikelme
        </a>
      </p>
    </div>
  );
};

export default Footer;
