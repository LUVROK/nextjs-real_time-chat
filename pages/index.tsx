import styles from "@components/styles/Home.module.scss";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { setNameState, setAuthState } from "@components/store/auth/authSlice";
import { Button } from "@components/UI/Button/button";
import { Input } from "@components/UI/Input/Input";

export default function Home() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [massage, setmassage] = useState<string>(``);

  const handleSubmit = () => {
    if (massage) {
      dispatch(setNameState(massage));
      dispatch(setAuthState(true));
      router.push("/chat");
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.form}>
        <label>Ваше имя:</label>
        <Input
          type="text"
          placeholder="Введите ваше имя..."
          disabled={true}
          value={massage}
          setValue={setmassage}
          keyPress={() => handleSubmit()}
        />
        <Button title="Войти" callback={() => handleSubmit()} />
      </div>
    </main>
  );
}
