import { Detail, getPreferenceValues } from "@raycast/api";
import { WebClient } from "@slack/web-api";

export default function LogIn() {
  const { token } = getPreferenceValues();
  const web = new WebClient(token);

  return (
    <Detail markdown={token}></Detail>
  );
}