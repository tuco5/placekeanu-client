import Form from "@/components/Form";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  width: string;
  height: string;
  y: boolean;
  g: boolean;
};

export default function Home() {
  return (
    <main className="flex w-full justify-center">
      <div className="max-w-[1024px] flex flex-col w-full">
        <h2 className="p-6 font-normal text-3xl mb-8 text-center">
          Get random pictures of Keanu 😎
        </h2>

        <Form />
      </div>
    </main>
  );
}
