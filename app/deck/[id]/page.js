import FlashcardPage from "./FlashcardPage";

export async function generateStaticParams() {
  return [
    { id: "hsk1" },
    { id: "hsk2" },
    { id: "hsk3" },
    { id: "hsk4" },
    { id: "hsk5" },
    { id: "hsk6" },
  ];
}

export default function Deck({ params }) {
  return <FlashcardPage id={params.id} />;
}
