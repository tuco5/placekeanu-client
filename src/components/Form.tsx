"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input, Switch } from "@nextui-org/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { gql } from "../__generated__";
import { useQuery } from "@apollo/client";

const KEANU_IMAGE = gql(`
  query GetKeanuImage($width: String!) {
    keanuImage(width: $width)
  }
`);

const schema = z.object({
  width: z.coerce.number().int().nonnegative().lte(3000).optional(),
  height: z.coerce.number().int().nonnegative().lte(3000).optional(),
  y: z.boolean().optional().default(false),
  g: z.boolean().optional().default(false),
});

type Schema = z.infer<typeof schema>;

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Schema>({
    resolver: zodResolver(schema),
  });

  const { data, loading, error } = useQuery(KEANU_IMAGE, {
    variables: { width: "500" },
  });

  console.log("graphql data", data);

  const onSubmit: SubmitHandler<Schema> = (data) => {
    console.log("data", data);
  };

  return (
    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-row w-full gap-4 items-center justify-center">
        <Input
          label="Width"
          isClearable
          variant="bordered"
          description="Enter a number for the width"
          isInvalid={"width" in errors}
          errorMessage={errors ? errors.width?.message : ""}
          {...register("width")}
        />
        <Input
          label="Heigth"
          isClearable
          variant="bordered"
          description="If you don't specify a height, you'll get a square Keanu"
          isInvalid={"height" in errors}
          errorMessage={errors ? errors.height?.message : ""}
          {...register("height")}
        />
        <Switch size="md" {...register("y")}>
          Young
        </Switch>
        <Switch size="md" className="whitespace-nowrap" {...register("g")}>
          Grey Scale
        </Switch>
      </div>
      <Button type="submit" color="primary" className="mt-8 uppercase">
        Fetch
      </Button>

      {!!data && <div dangerouslySetInnerHTML={{ __html: data?.keanuImage }} />}
    </form>
  );
}
