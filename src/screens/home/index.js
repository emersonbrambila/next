import { useEffect, useState } from "react";

import { useRouter } from "next/router";

import { toast } from "react-toastify";

import { IoMdPersonAdd, IoMdTrash, IoMdPerson } from "react-icons/io";

import api from "../../services/api";

import styles from "./styles.module.scss";

export default function HomeScreen() {
  const [users, setUsers] = useState([]);

  const router = useRouter();

  useEffect(() => {
    const loadData = async () => {
      try {
        await api.get("/users").then(({ data }) => {
          setUsers(data);
        });
      } catch (err) {
        console.log(`Cannot get users`, err.response || err);
        toast.error("Ocorreu um erro ao listar os usuários");
      }
    };
    loadData();
  }, []);

  const editUser = (id) => {
    router.push(`/editar-usuario/${id}`);
  };

  const deleteUser = async (id) => {
    try {
      await api
        .delete("/users", {
          data: {
            id,
          },
        })
        .then(() => {
          toast.success("Deletado com sucesso");
          router.reload();
        });
    } catch (err) {
      console.log(err);
      toast.error("Ocorreu um erro");
    }
  };

  return (
    <main className={styles.main}>
      <section className={`g-container`}>
        <div className={styles.infos}>
          <h1>Lista de usuários</h1>
          <p>Listagem com todos os usuários do sistema Lorem Ipsum.</p>
          <div className={styles.actions}>
            <button
              className={styles.btn}
              onClick={() => router.push("/criar-usuario")}
            >
              Adicionar usuário <IoMdPersonAdd className="t-icon" />
            </button>
          </div>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Nome</th>
                <th>E-mail</th>
                <th>Status</th>
                <th>Criado Em</th>
                <th>Atualizado Em</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}l</td>
                  <td>{user.status ? "Ativo" : "Inativo"}</td>
                  <td>{user.createdAt}</td>
                  <td>{user.updatedAt}</td>
                  <td className="actions">
                    <button
                      className={styles.btn}
                      onClick={() => editUser(user.id)}
                    >
                      <IoMdPerson />
                    </button>
                    <button
                      className={styles.btn}
                      onClick={() => deleteUser(user.id)}
                    >
                      <IoMdTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
