import React from "react";
import Publications from "./Publications";
import bibtex from "../data/bib/SelectedPublications.bib";
// import bibtex from "../data/bib/Publications.bib";

export default function SelectedPublicationsSection() {
  return (
    <section className="flex flex-col gap-3">
      <h1 className="text-3xl font-semibold">Selected publication [(co-)first author]</h1>
      <p className="text-sm italic text-gray-600">
        *: Equal contribution, †: Project leader, ‡: Corresponding author.
      </p>
      <Publications bibtex={bibtex} />
    </section>
  );
}
