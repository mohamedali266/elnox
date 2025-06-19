import QRCode from 'qrcode.react';

export default function QRCodeDisplay({ userId }) {
  const qrValue = `https://emenu.com.ng/user/${userId}/menu`;
  return (
    <div className="p-4 text-center">
      <h2 className="text-lg mb-2">رمز QR لقائمتك</h2>
      <QRCode value={qrValue} size={200} />
      <p className="mt-2 text-sm break-words">{qrValue}</p>
    </div>
  );
}