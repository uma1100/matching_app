import yk1 from "../assets/yk1.jpg";
import s2 from "../assets/s2.jpg";
import s3 from "../assets/s3.jpg";
import s4 from "../assets/s4.jpg";
import s5 from "../assets/s5.jpg";
import s6 from "../assets/s6.jpg";
import s7 from "../assets/s7.jpg";
import s8 from "../assets/s8.jpg";
import s9 from "../assets/s9.jpg";

export interface IProfile {
  name: string;
  age: "20代" | "30代" | "40代" | "50代" | "60代" | "70代" | "その他";
  where: string;
  image: string;
}

type TData = IProfile[];
const img_arr = [yk1,s2,s3,s4,s5,s6,s7,s8,s9];

export const profData: TData = [
  {
    name: "ゆか",
    age: "20代",
    where: "東京都",
    image: img_arr[Math.floor(Math.random() * img_arr.length)]
  },
  {
    name: "めぐ",
    age: "30代",
    where: "東京都",
    image: img_arr[Math.floor(Math.random() * img_arr.length)]
  },
  {
    name: "めぐ",
    age: "30代",
    where: "東京都",
    image: img_arr[Math.floor(Math.random() * img_arr.length)]
  },
  {
    name: "めぐ",
    age: "30代",
    where: "東京都",
    image: img_arr[Math.floor(Math.random() * img_arr.length)]
  },
  {
    name: "めぐ",
    age: "30代",
    where: "東京都",
    image: img_arr[Math.floor(Math.random() * img_arr.length)]
  },
  {
    name: "めぐ",
    age: "30代",
    where: "東京都",
    image: img_arr[Math.floor(Math.random() * img_arr.length)]
  },
  {
    name: "めぐ",
    age: "30代",
    where: "東京都",
    image: img_arr[Math.floor(Math.random() * img_arr.length)]
  },
  {
    name: "めぐ",
    age: "30代",
    where: "東京都",
    image: img_arr[Math.floor(Math.random() * img_arr.length)]
  },
  {
    name: "めぐ",
    age: "30代",
    where: "東京都",
    image: img_arr[Math.floor(Math.random() * img_arr.length)]
  },
  {
    name: "めぐ",
    age: "30代",
    where: "東京都",
    image: img_arr[Math.floor(Math.random() * img_arr.length)]
  },
  {
    name: "めぐ",
    age: "30代",
    where: "東京都",
    image: img_arr[Math.floor(Math.random() * img_arr.length)]
  },
  {
    name: "めぐ",
    age: "30代",
    where: "東京都",
    image: img_arr[Math.floor(Math.random() * img_arr.length)]
  },
  {
    name: "めぐ",
    age: "30代",
    where: "東京都",
    image: img_arr[Math.floor(Math.random() * img_arr.length)]
  },
  {
    name: "めぐ",
    age: "30代",
    where: "東京都",
    image: img_arr[Math.floor(Math.random() * img_arr.length)]
  },
  {
    name: "めぐ",
    age: "30代",
    where: "東京都",
    image: img_arr[Math.floor(Math.random() * img_arr.length)]
  },
  {
    name: "めぐ",
    age: "30代",
    where: "東京都",
    image: img_arr[Math.floor(Math.random() * img_arr.length)]
  },
  {
    name: "めぐ",
    age: "30代",
    where: "東京都",
    image: img_arr[Math.floor(Math.random() * img_arr.length)]
  },
  {
    name: "めぐ",
    age: "30代",
    where: "東京都",
    image: img_arr[Math.floor(Math.random() * img_arr.length)]
  }
];
