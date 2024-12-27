import BaseTrend from "@/components/trend";
import { createClient } from "@/lib/supabase/server";

export default async function Trend({ type }) {
  const supabase = createClient();
  console.log("Hello");
  let { data, error } = await supabase.rpc("create_total", {
    type_arg: type,
  });
  if (error) console.error(error);
  console.log(data);
  const amount = data ?? 0;
  return <BaseTrend type={type} amount={amount} prevAmount={amount - 500} />;
}
