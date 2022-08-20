import Head from "next/head";
import { useState, useEffect } from "react";
import { DefaultService } from "../src/client";

import { OpenAPI } from "../src/client";
import { ProteinRead } from "../src/client";

if (process.env.NODE_ENV !== "production") {
  OpenAPI.BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
}

export default function Proteins() {
  const [proteins, setProteins] = useState<ProteinRead[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProteins() {
      const data = await DefaultService.readProteinsReadProteins();
      console.log(data);
      setProteins(data);
      setLoading(false);
    }
    fetchProteins();
  }, []);

  if (loading) {
    return <p>loading...</p>;
  }

  return (
    <div>
      <Head>
        <title>Proteins</title>
      </Head>
      <div>
        <h1>Proteins</h1>
        <div>
          <ul>
            {proteins.map((protein) => (
              <li key={protein.id}>{protein.created}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
