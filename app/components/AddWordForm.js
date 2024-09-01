import { useState } from "react";

export default function AddWordForm({ onAddWord }) {
  const [showForm, setShowForm] = useState(false);
  const [french, setFrench] = useState("");
  const [english, setEnglish] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (french && english) {
      onAddWord({ french, english });
      setFrench("");
      setEnglish("");
      setShowForm(false);
    }
  };

  return (
    <div className="mt-8 w-full max-w-sm">
      {!showForm ? (
        <button
          onClick={() => setShowForm(true)}
          className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Add Word
        </button>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              value={french}
              onChange={(e) => setFrench(e.target.value)}
              placeholder="Word"
              className="text-black w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              value={english}
              onChange={(e) => setEnglish(e.target.value)}
              placeholder="English translation"
              className="text-black w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="px-4 py-2 text-gray-600 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              Submit
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
