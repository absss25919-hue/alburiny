import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    checkAuth();
    fetchInquiries();
  }, []);

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) navigate("/admin-login");
  };

  const fetchInquiries = async () => {
    const { data, error } = await supabase
      .from("inquiries")
      .select("*")
      .order("created_at", { ascending: false });
    if (!error) setInquiries(data);
    setLoading(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/admin-login");
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <h1 className="text-4xl font-extrabold">Inquiries</h1>
            <p className="text-white/50 mt-3">{inquiries.length} total submissions</p>
          </div>
          <button
            onClick={handleLogout}
            className="px-6 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-sm font-semibold transition"
          >
            Logout
          </button>
        </div>

        {/* Table */}
        {loading ? (
          <p className="text-white/50 text-center py-20">Loading...</p>
        ) : inquiries.length === 0 ? (
          <p className="text-white/50 text-center py-20">No inquiries yet.</p>
        ) : (
          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-white/5 text-white/60 uppercase text-xs tracking-wider">
                  <th className="px-6 py-4 text-left">Date</th>
                  <th className="px-6 py-4 text-left">Name</th>
                  <th className="px-6 py-4 text-left">Email</th>
                  <th className="px-6 py-4 text-left">Phone</th>
                  <th className="px-6 py-4 text-left">Company</th>
                  <th className="px-6 py-4 text-left">Message</th>
                </tr>
              </thead>
              <tbody>
                {inquiries.map((inq, i) => (
                  <tr
                    key={inq.id}
                    className={`border-t border-white/5 hover:bg-white/5 transition ${
                      i === 0 ? "bg-orange-500/10" : ""
                    }`}
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-white/50">
                      {new Date(inq.created_at).toLocaleDateString("en-GB", {
                        day: "2-digit", month: "short", year: "numeric",
                        hour: "2-digit", minute: "2-digit",
                      })}
                    </td>
                    <td className="px-6 py-4 font-semibold">{inq.full_name}</td>
                    <td className="px-6 py-4 text-orange-300">{inq.email}</td>
                    <td className="px-6 py-4">{inq.phone}</td>
                    <td className="px-6 py-4 text-white/70">{inq.company || "—"}</td>
                    <td className="px-6 py-4 max-w-xs text-white/70 truncate">{inq.message}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}