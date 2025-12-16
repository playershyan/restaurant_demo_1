"use client";

import BookATableSection from "@/sections/book-a-table";
import Head from "next/head";

export default function BookATable() {
  return (
    <>
      <Head>
        <title>Global Tastes - Book a Table</title>
      </Head>

      <main className="min-h-screen relative overflow-hidden">
        <BookATableSection />
      </main>
    </>
  );
}
