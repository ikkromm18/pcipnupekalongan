import { Button } from "flowbite-react";

export default function ArticleCategory() {
    return (
        <>
            <div className="flex flex-wrap justify-center gap-2 mb-6">
                <Button color="alternative">Semua</Button>
                <Button color="alternative">Berita</Button>
                <Button color="alternative">Artikel</Button>
                <Button color="alternative">Pimpinan Cabang</Button>
                <Button color="alternative">Pimpinan Anak Cabang</Button>
                <Button color="alternative">Pimpinan Ranting</Button>
            </div>
        </>
    );
}
