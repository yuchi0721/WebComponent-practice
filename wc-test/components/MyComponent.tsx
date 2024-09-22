"use client";
import { textAtom } from "@/state";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";

type Props = {
  title: string;
};

const MyComponent = ({ title }: Props) => {
  const [text] = useAtom(textAtom);
  const [data, setData] = useState("");
  console.log("first");
  useEffect(() => {
    console.log("effect");
    console.log(process.env.NEXT_PUBLIC_API_BASE_URL);
    const fetchData = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/data`
      );
      const data = res.json().then((value) => {
        console.log("data");
        setData(value.data);
        return value.data;
      });

      return data;
    };
    fetchData();
  }, []);
  return <div className="h-full">{title + text + data} FUCK</div>;
};

export default MyComponent;
