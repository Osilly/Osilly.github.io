import React from "react";
import Publications from "./Publications";
import interest_bibtex from "../data/bib/InterestPublications.bib";
import first_bibtex from "../data/bib/FirstPublications.bib";
import co_first_bibtex from "../data/bib/CoFirstPublications.bib";
// import bibtex from "../data/bib/Publications.bib";

export default function SelectedPublicationsSection() {
  return (
    <section className="flex flex-col gap-4">
      <h1 className="text-3xl font-semibold">Selected Publication</h1>
      <p className="text-sm italic text-gray-600">
        *: Equal contribution, †: Project leader, ‡: Corresponding author.
      </p>

      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold">Current Research Interest</h2>
        <Publications bibtex={interest_bibtex} />
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold">First-author Publications</h2>
        <Publications bibtex={first_bibtex} />
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold">Co-first-author Publications</h2>
        <Publications bibtex={co_first_bibtex} />
      </div>
    </section>
  );
}
