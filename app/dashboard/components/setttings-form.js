"use client";
import AlertError from "@/components/alert-error";
import AlertSuccess from "@/components/alert-success";
import DateRangeSelect from "@/components/date-range-select";
import FormError from "@/components/form-error";
import Input from "@/components/input";
import Label from "@/components/label";
import SubmitButton from "@/components/submit-button";
import { updateSettings } from "@/lib/actions";
import { useFormState } from "react-dom";
const initialState = {
  message: "",
  error: false,
  errors: {},
};
export default function SettingsForm({ defaults }) {
  const [state, formAction] = useFormState(updateSettings, initialState);
  return (
    <form className='space-y-4' action={formAction}>
      {state?.error && <AlertError>{state?.message}</AlertError>}
      {!state?.error && state?.message.length > 0 && (
        <AlertSuccess>{state?.message}</AlertSuccess>
      )}

      <Label htmlFor='fullName'>User full name</Label>
      {state?.errors["fullName"]?.map((error) => (
        <FormError key={"fullName-${error}"} error={error} />
      ))}
      <Input
        type='text'
        name='fullName'
        id='fullName'
        placeholder='User full name'
        defaultValue={defaults?.fullName}
      />
      <Label htmlFor='defaultView'>Default transactions view</Label>
      {state?.errors["defaultView"]?.map((error) => (
        <FormError key={"defaultView-${error}"} error={error} />
      ))}
      <DateRangeSelect
        name='defaultView'
        id='defaultView'
        defaultValue={defaults?.defaultView}
      />
      <SubmitButton>Update Settings</SubmitButton>
    </form>
  );
}
