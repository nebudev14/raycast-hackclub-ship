import { Form, ActionPanel, Action, showToast, getPreferenceValues } from "@raycast/api";
import { WebClient } from "@slack/web-api";

type Values = {
  // textfield: string;
  textarea: string;
  // datepicker: Date;
  // checkbox: boolean;
  // dropdown: string;
  // tokeneditor: string[];
};

export default function Command() {
  const { token } = getPreferenceValues();
  const web = new WebClient(token);

  async function handleSubmit(values: Values) {
    const channelId = 'C029NP7J5C7';
    const result = await web.chat.postMessage({
      text: values.textarea,
      channel: channelId
    })
    console.log(`sent ${result.ts}`)
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
      <Form.Description text="This form showcases all available form elements." />
      {/* <Form.TextField id="textfield" title="Text field" placeholder="Enter text" defaultValue="Raycast" /> */}
      <Form.TextArea id="textarea" title="Text area" placeholder="Enter multi-line text" />
      {/* <Form.Separator />
      <Form.DatePicker id="datepicker" title="Date picker" />
      <Form.Checkbox id="checkbox" title="Checkbox" label="Checkbox Label" storeValue />
      <Form.Dropdown id="dropdown" title="Dropdown">
        <Form.Dropdown.Item value="dropdown-item" title="Dropdown Item" />
      </Form.Dropdown>
      <Form.TagPicker id="tokeneditor" title="Tag picker">
        <Form.TagPicker.Item value="tagpicker-item" title="Tag Picker Item" />
      </Form.TagPicker> */}
    </Form>
  );
}
