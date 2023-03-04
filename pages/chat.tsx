import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@components/styles/Home.module.scss";
import React, { useState, useEffect, useRef } from "react";
import SocketIOClient from "socket.io-client";
import { Imassage } from "@components/types/socket";
import { useSelector } from "react-redux";
import { selectName, selectAuthState } from "@components/store/auth/authSlice";
import { useRouter } from "next/router";
import { Button } from "@components/UI/Button/button";
import { Input } from "@components/UI/Input/Input";

const inter = Inter({ subsets: ["latin"] });

export default function Chat() {
  const name = useSelector(selectName);
  const auth = useSelector(selectAuthState);
  const inputRef = useRef(null);
  const [connected, setConnected] = useState<boolean>(false);
  const router = useRouter();

  const [chat, setChat] = useState<Imassage[]>([]);
  const [massage, setmassage] = useState<string>(`${name} подключился к чату`);

  useEffect((): any => {
    auth ? null : router.push("/");

    const socket = SocketIOClient.connect("http://localhost:3000", {
      path: "/api/socketio",
    });

    socket.on("connect", () => {
      sendMessage();
      setConnected(true);
    });

    socket.on("message", (message: Imassage) => {
      chat.push(message);
      setChat([...chat]);
    });

    if (socket) return () => socket.disconnect();
  }, []);

  const sendMessage = async () => {
    if (massage) {
      const message: Imassage = {
        name,
        massage,
      };

      const resp = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(message),
      });

      if (resp.ok) setmassage("");
    }
    scrollToBottom();
  };

  const messagesEnd = useRef(null);
  const scrollToBottom = () => {
    (messagesEnd as any).current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Head>
        <title></title>
        <meta name="description" content="chat real time with socket io" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
        <title>Chat</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {auth && (
          <div className={styles.main_cont}>
            <div>
              <h1>Реалтайм чатик от Павла</h1>
              <h2>
                Твой ник - <span>{name}</span>
              </h2>
            </div>
            <div className={styles.sendMessage}>
              <div className={styles.messages__block}>
                {chat.length ? (
                  chat.map((chat, i) => (
                    <div key={"massage_" + i} className={styles.messages__block_massage_}>
                      <span>{chat.name === name ? "Me" : chat.name}</span>
                      <span>{chat.massage}</span>
                    </div>
                  ))
                ) : (
                  <div className={styles.message0}>Нет сообщений</div>
                )}
                <div ref={messagesEnd} className="dicP"></div>
              </div>
              <div className={styles.sendMessage_block}>
                <Input
                  placeholder={connected ? "Введите сообщение..." : "Присоединение, ожидайте..."}
                  value={massage}
                  type="text"
                  ref={inputRef}
                  disabled={connected}
                  setValue={setmassage}
                  keyPress={sendMessage}
                />
                <Button title="ОТПРАВИТЬ" callback={sendMessage} disabled={!connected} />
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
