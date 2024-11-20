import { useState, useEffect } from "react";
import QRCode from "qrcode";
import "./separate_qr.css";

const A_qr_Block = ({ item }) => {
  const [src, setSrc] = useState("");

  useEffect(() => {
    QRCode.toDataURL(
      `Name: ${item.name}, City: ${item.city}, Address: ${item.address}, No. of Adults: ${item.adult}, No. of Children: ${item.children}, Total Fee: ${item.total_fee}, Email: ${item.email}`
    ).then(setSrc);
  }, [item]);

  return (
    <div className="qr-block">
      <div className="qr-card">
        <img className="qr-img" src={src} alt={`${item.name} QR`} />
        <div className="qr-details">
          <div className="qr-name">{item.name}</div>
          <div className="qr-city">{item.city}</div>
        </div>
      </div>
    </div>
  );
};

export default A_qr_Block;
