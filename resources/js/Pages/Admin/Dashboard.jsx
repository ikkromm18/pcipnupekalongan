import AdminLayout from "@/Layouts/AdminLayout";

export default function Dashboard() {
    return (
        <>
            <h1>Ini adalah Halaman Admin</h1>
        </>
    );
}

Dashboard.layout = (page) => <AdminLayout children={page} />;
