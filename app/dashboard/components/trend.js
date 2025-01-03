import BaseTrend from "@/components/trend";
import { createClient } from "@/lib/supabase/server";

export default async function Trend({ type, range }) {
  const supabase = createClient();
  let { data, error } = await supabase.rpc("create_total", {
    range_arg: range,
    type_arg: type,
  });
  if (error) console.error(error);
  const amounts = data[0];
  return (
    <BaseTrend
      type={type}
      amount={amounts.current_amount}
      prevAmount={amounts.previous_amount}
    />
  );
}
