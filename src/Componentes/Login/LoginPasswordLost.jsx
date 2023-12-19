import React from "react";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../Hooks/useForms";
import useFetch from "../../Hooks/useFetch";
import { PASSWORD_LOST } from "../../api";
import Head from "../Helper/Head";

const LoginPasswordLost = () => {
  const login = useForm();
  const { data, loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = PASSWORD_LOST({
      login: login.value,
      url: window.location.href.replace("perdeu", "resetar"),
    });
    await request(url, options);
  }

  return (
    <section>
      <Head title="Perdeu a senha" />
      <h1 className="title">Perdeu a senha?</h1>
      {data ? (
        <p style={{ color: "#4c1" }}> {data} </p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="Email/ Usuário" type="text" name="login" {...login} />
          {loading ? (
            <Button disabled>Enviando...</Button>
          ) : (
            <Button>Enviar Email</Button>
          )}
        </form>
      )}
      {/*   {error && <p className={styles.error}>Tente novamente!</p>} */}
      {error && <p className={styles.error}>{error}</p>}
    </section>
  );
};

export default LoginPasswordLost;
