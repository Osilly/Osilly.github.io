import React from "react";
import Publications from "./Publications";
import bibtex from "../data/bib/OtherPublications.bib";

export default function OtherPublicationsSection() {
  return (
    <section className="flex flex-col gap-3">
      <h1 className="text-3xl font-semibold">Other publication</h1>
      <Publications bibtex={bibtex} />
    </section>
  );
}
