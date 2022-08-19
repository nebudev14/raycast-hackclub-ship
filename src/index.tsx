import { Form, ActionPanel, Action, showToast, showInFinder, Clipboard, getPreferenceValues, getSelectedFinderItems } from "@raycast/api";
import { WebClient } from "@slack/web-api";
import { homedir } from "os"; 
import { join } from "path";
import { useRef } from "react";

type Values = {
  textfield?: string;
  textarea: string;
  // datepicker: Date;
  // checkbox: boolean;
  // dropdown: string;
  // tokeneditor: string[];
};

export default function Command() {
  const { token } = getPreferenceValues();
  const web = new WebClient(token);
  const infile = useRef(null);

  async function handleSubmit(values: Values) {
    const channelId = "C029NP7J5C7";

    try {
      const images = await getSelectedFinderItems();
    } catch (e) {
      console.log(e)
    }


    // const result = await web.chat.postMessage({
    //   text: values.textarea,
    //   channel: channelId,
      
    // })
    // console.log(`sent ${result.ts}`)
    // console.log(values.textfield);
    // console.log(item)
    // showToast({ title: "Submitted form", message: "See logs for submitted values" });
  }

  return (
    <Form
      actions={
        <ActionPanel>
          <Action.SubmitForm onSubmit={handleSubmit} />
        </ActionPanel>
      }
    >
      <Form.Description text="Ship a project to the Hack Club Slack!" />
      <Form.TextField id="textfield" title="Title (optional)" placeholder="Title" />
      <Form.TextArea
        id="textarea"
        title="Ship message"
        placeholder="Detail your ship! Feel free to add demo links too!"
      />
      <Form.Separator />
      {/* <Form.Dropdown id="dropdown" title="Channel">
        <Form.Dropdown.Item value="C01504DCLVD" title="Scrapbook" />
        <Form.Dropdown.Item value="C01504DCLVD" title="Scrapbook" />
        <Form.Dropdown.Item value="C029NP7J5C7" title="warren's channel rofl" />
      </Form.Dropdown> */}

    </Form>
  );
}
