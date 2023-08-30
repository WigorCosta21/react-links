import { FormEvent, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import { db } from "../../services/firebaseConnections";
import { setDoc, doc, getDoc } from "firebase/firestore";

export const Networks = () => {
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");
  const [linkedin, setLinkedin] = useState("");

  useEffect(() => {
    const loadLink = () => {
      const docRef = doc(db, "social", "link");

      getDoc(docRef).then((snapshot) => {
        if (snapshot.data() !== undefined) {
          setFacebook(snapshot.data()?.facebook);
          setInstagram(snapshot.data()?.instagram);
          setLinkedin(snapshot.data()?.linkedin);
        }
      });
    };

    loadLink();
  }, []);

  const handleRegister = (e: FormEvent) => {
    e.preventDefault();

    setDoc(doc(db, "social", "link"), {
      facebook: facebook,
      instagram: instagram,
      linkedin: linkedin,
    })
      .then(() => {
        console.log("Cadastrados com sucesso!");
      })
      .catch((error) => console.log(`Erro ao salvar: ${error}`));
  };

  return (
    <div className="flex items-center flex-col min-h-screen pb-7 px-2">
      <Header />

      <h1 className="text-white text-2xl font-medium mt-8 mb-4">
        Minhas redes sociais
      </h1>

      <form onSubmit={handleRegister} className="flex flex-col max-w-xl w-full">
        <label className="text-white flex-col max-w-xl w-full">
          Link do facebook
        </label>
        <Input
          type="url"
          placeholder="Digite a url do facebook..."
          value={facebook}
          onChange={(e) => setFacebook(e.target.value)}
        />

        <label className="text-white flex-col max-w-xl w-full">
          Link do instagram
        </label>
        <Input
          type="url"
          placeholder="Digite a url do instagram..."
          value={instagram}
          onChange={(e) => setInstagram(e.target.value)}
        />

        <label className="text-white flex-col max-w-xl w-full">
          Link do linkedin
        </label>
        <Input
          type="url"
          placeholder="Digite a url do linkedin..."
          value={linkedin}
          onChange={(e) => setLinkedin(e.target.value)}
        />

        <button
          type="submit"
          className="text-white bg-blue-600 h-9 rounded-md items-center justify-center flex mb-7 font-medium"
        >
          Salvar links
        </button>
      </form>
    </div>
  );
};
