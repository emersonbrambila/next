import { useEffect, useState } from "react";

import { useRouter } from "next/router";

import { toast } from "react-toastify";

import { MdSave } from "react-icons/md";

import api from "../../services/api";

import styles from "./styles.module.scss";

export default function EditUserScreen() {
  const router = useRouter();

  // const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(true);
  const [password, setPassword] = useState("");

  useEffect(() => {
    const loadData = async () => {
      try {
        await api.get(`/users/${router.query.id}`).then(({ data }) => {
          const { name, email, status } = data;
          setName(name);
          setEmail(email);
          setStatus(status);
        });
      } catch (err) {
        console.log(`Cannot get user`, err.response || err);
        toast.error("Ocorreu um erro ao consultar dados do usuário");
      }
    };
    if (router.isReady && router.query.id) {
      loadData();
    }
  }, [router]);

  const saveUser = async (e) => {
    e.preventDefault();

    try {
      let params = {
        id: router.query.id,
        name,
        email,
        status,
      };

      if (password && password.length) {
        params.password = password;
      }

      await api.put("/users", params).then((r) => {
        toast.success("Atualizado com sucesso");
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
          <h1>Editar usuário</h1>
          <p>Nesta tela você pode editar um usuário</p>

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
              Ativo:
              <input
                name="status"
                type="checkbox"
                checked={status}
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
