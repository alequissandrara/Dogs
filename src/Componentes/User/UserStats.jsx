import React from "react";
import Head from "../Helper/Head";
import useFetche from "../../Hooks/useFetch";
import { STATS_GET } from "../../api";
import Loading from "../Helper/Loading";
import UserStartsGraphs from "./UserStartsGraphs";

const UserStats = () => {
  const { data, error, loading, request } = useFetche();

  React.useEffect(() => {
    async function getData() {
      const { url, options } = STATS_GET();
      await request(url, options);
    }
    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <> {error && <p className={styles.error}>{error}</p>}</>;
  if (data)
    return (
      <div>
        <Head title="Estatísticas" {...data} />
        <UserStartsGraphs data={data} />
      </div>
    );
  else return null;
};

export default UserStats;
