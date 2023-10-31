"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { getKeanuFetch } from "@/redux/features/keanuSlice";
import { Button, Input, Switch } from "@nextui-org/react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { useAppDispatch } from "@/redux/hooks";

const schema = z.object({
  width: z.coerce.number().int().nonnegative().lte(3000),
  height: z.coerce.number().int().nonnegative().lte(3000).optional(),
  y: z.coerce.string().optional(),
  g: z.coerce.string().optional(),
});

type Schema = z.infer<typeof schema>;

export default function Form() {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Schema>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<Schema> = (data) => {
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
      <div className="flex flex-col md:flex-row w-full gap-4 items-start justify-center">
        <div className="flex gap-4 md:flex-row flex-col w-full">
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
        </div>
        <div className="flex gap-4 mb-4">
          <Controller
            control={control}
            name="y"
            render={({ field }) => (
              <Switch size="md" {...field} className="whitespace-nowrap pt-4">
                Young
              </Switch>
            )}
          />
          <Controller
            control={control}
            name="g"
            render={({ field }) => (
              <Switch className="whitespace-nowrap pt-4" size="md" {...field}>
                Grey Scale
              </Switch>
            )}
          />
        </div>
      </div>
      <Button
        type="submit"
        color="primary"
        className="mb-6 mt-4 uppercase animate-pulse px-8"
      >
        Fetch
      </Button>
    </form>
  );
}
