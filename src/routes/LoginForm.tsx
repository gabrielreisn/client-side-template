import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  email: z.string().email(),
  password: z.string().email(),
});

export type Inputs = z.infer<typeof schema>;

export function Login() {
  const { register, handleSubmit } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

  async function submitForm(data: Inputs) {
    console.log({ data });
  }

  return (
    <div className="mx-auto max-w-5xl border-2 rounded-xl p-12">
      <form onSubmit={handleSubmit(submitForm)} className="flex flex-col gap-6">
        <input {...register("email")} className="border" placeholder="Email" />
        <input
          {...register("password")}
          className="border"
          placeholder="Password"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
