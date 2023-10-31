import Form from "@/components/Form";
import KeanuImg from "@/components/KeanuImg";

export default function Home() {
  return (
    <main className="flex w-full justify-center px-4">
      <div className="max-w-[1024px] flex flex-col w-full pb-10">
        <h2 className="p-6 font-normal text-3xl mb-8 text-center">
          Get random pictures of Keanu 😎
        </h2>

        <Form />
        <KeanuImg />
      </div>
    </main>
  );
}
