import { useState } from "react";

import { useRouter } from "next/router";

import { toast } from "react-toastify";

import { MdSave } from "react-icons/md";

import api from "../../services/api";

import styles from "./styles.module.scss";

export default function CreateUserScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(false);
  const [password, setPassword] = useState("");

  const router = useRouter();

  const saveUser = async (e) => {
    e.preventDefault();

    try {
      await api
        .post("/users", {
          name,
          email,
          status,
          password,
        })
        .then((r) => {
          toast.success("Cadastrado com sucesso");
          router.push("/");
        });
    } catch (err) {
      console.log(err);
      toast.error("Ocorreu um erro, confira os dados e tente novamente!");
    }
  };

  return (
    <main className={styles.main}>
      <section className={`g-container`}>
        <div className={styles.infos}>
          <h1>Criar usuário</h1>
          <p>Nesta tela você pode criar um usuário</p>

          <form className={styles.form} onSubmit={saveUser}>
            <label>
              Nome:
              <input
                name="name"
                placeholder="Nome"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                minLength={3}
                required
              />
            </label>
            <label>
              E-mail:
              <input
                name="email"
                placeholder="E-mail"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                minLength={5}
                required
              />
            </label>
            <label>
              Senha:
              <input
                name="password"
                placeholder="Senha"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                minLength={8}
                required
              />
            </label>
            <label>
              Ativo:
              <input
                name="status"
                type="checkbox"
                value={status}
                onChange={(e) => setStatus(e.target.checked)}
              />
            </label>
            <button className={styles.btn} type="submit">
              Salvar <MdSave />
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
