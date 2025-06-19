import MenuManager from './MenuManager';
import QRCodeDisplay from './QRCodeDisplay';

export default function UserDashboard() {
  const userId = 1; // Replace with actual user id after auth integration

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">User Dashboard</h1>
      <MenuManager />
      <QRCodeDisplay userId={userId} />
    </div>
  );
}