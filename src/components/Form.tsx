"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { getKeanuFetch } from "@/redux/features/keanuSlice";
import { Button, Input, Switch } from "@nextui-org/react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

const schema = z.object({
  width: z.coerce.number().int().nonnegative().lte(3000),
  height: z.coerce.number().int().nonnegative().lte(3000).optional(),
  y: z.coerce.string().optional(),
  g: z.coerce.string().optional(),
});

type Schema = z.infer<typeof schema>;

export default function Form() {
  const keanuImage = useAppSelector((state) => state.Keanu.keanuImage);
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<Schema>({
    resolver: zodResolver(schema),
  });

  console.log("watch", watch());
  console.log("errors", errors);

  const onSubmit: SubmitHandler<Schema> = (data) => {
    console.log("Form", data);
    dispatch(
      getKeanuFetch({
        width: data.width,
        height: data.height,
        y: Boolean(data.y),
        g: Boolean(data.g),
      })
    );
  };

  return (
    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-row w-full gap-4 items-center justify-center">
        <Input
          autoComplete="off"
          label="Width"
          isRequired
          isClearable
          variant="bordered"
          description="Enter a number for the width"
          isInvalid={"width" in errors}
          errorMessage={errors ? errors.width?.message : ""}
          {...register("width")}
        />
        <Input
          autoComplete="off"
          label="Heigth"
          isClearable
          variant="bordered"
          description="If you don't specify a height, you'll get a square Keanu"
          isInvalid={"height" in errors}
          errorMessage={errors ? errors.height?.message : ""}
          {...register("height")}
        />
        <Controller
          control={control}
          name="y"
          render={({ field }) => (
            <Switch size="md" {...field}>
              Young
            </Switch>
          )}
        />
        <Controller
          control={control}
          name="g"
          render={({ field }) => (
            <Switch className="whitespace-nowrap" size="md" {...field}>
              Grey Scale
            </Switch>
          )}
        />
      </div>
      <Button
        type="submit"
        color="primary"
        className="mt-8 uppercase animate-pulse px-8"
      >
        Fetch
      </Button>

      {!!keanuImage && <div dangerouslySetInnerHTML={{ __html: keanuImage }} />}
    </form>
  );
}
