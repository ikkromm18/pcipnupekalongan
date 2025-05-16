"use client";

import { Label, TextInput } from "flowbite-react";
import { BiSearch } from "react-icons/bi";

export default function Search() {
    return (
        <div className="max-w-md mb-6 mx-auto">
            <TextInput
                id="search"
                type="email"
                rightIcon={BiSearch}
                placeholder="Cari Artikel atau Berita"
                required
            />
        </div>
    );
}
