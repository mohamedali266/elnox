import { useEffect, useState } from 'react';
import axios from 'axios';

export default function MenuManager() {
  const [menus, setMenus] = useState([]);
  const [form, setForm] = useState({ title: '', description: '', price: '', image_url: '' });

  const fetchMenus = async () => {
    const res = await axios.get('http://localhost:5000/api/menus');
    setMenus(res.data);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addMenu = async () => {
    await axios.post('http://localhost:5000/api/menus', form);
    setForm({ title: '', description: '', price: '', image_url: '' });
    fetchMenus();
  };

  useEffect(() => {
    fetchMenus();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">إدارة القائمة</h2>
      <div className="space-y-2 mb-4">
        <input name="title" value={form.title} onChange={handleChange} placeholder="اسم الطبق" className="border p-2 w-full" />
        <input name="description" value={form.description} onChange={handleChange} placeholder="الوصف" className="border p-2 w-full" />
        <input name="price" value={form.price} onChange={handleChange} placeholder="السعر" className="border p-2 w-full" />
        <input name="image_url" value={form.image_url} onChange={handleChange} placeholder="رابط الصورة" className="border p-2 w-full" />
        <button onClick={addMenu} className="bg-blue-500 text-white px-4 py-2">إضافة</button>
      </div>
      <ul>
        {menus.map(menu => (
          <li key={menu.id} className="border p-2 mb-2">
            <h3 className="font-bold">{menu.title} - ${menu.price}</h3>
            <p>{menu.description}</p>
            {menu.image_url && <img src={menu.image_url} alt="" className="w-32 mt-2" />}
          </li>
        ))}
      </ul>
    </div>
  );
}