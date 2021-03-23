import EditorJS, {
  OutputData,
  ToolConstructable,
  ToolSettings,
} from "@editorjs/editorjs";

import { useIntl } from "react-intl";
import { commonMessages } from "@temp/intl";
import { hybritProductDescriptions } from "@utils/misc";

import Header from "@editorjs/header";
import List from "@editorjs/list";
import Quote from "@editorjs/quote";
import createGenericInlineTool from "editorjs-inline-tool";
import React from "react";

import * as S from "./styles";

export interface RichTextEditorContentProps {
  jsonData: string;
}

export const tools: Record<string, ToolConstructable | ToolSettings> = {
  header: {
    class: Header,
    config: {
      defaultLevel: 1,
      levels: [1, 2, 3],
    },
  },
  list: List,
  quote: Quote,
  strikethrough: createGenericInlineTool({
    sanitize: {
      s: {},
    },
    shortcut: "CMD+S",
    tagName: "s",
    toolboxIcon: "",
  }),
};

export const RichTextEditorContent: React.FC<RichTextEditorContentProps> = ({
  jsonData,
}) => {
  const editor = React.useRef<EditorJS>();
  const editorContainer = React.useRef<HTMLDivElement>(null);

  const intl = useIntl();

  const oldData: OutputData = JSON.parse(jsonData);

  const { text } = oldData.blocks[0].data;

  const newText =
    text === hybritProductDescriptions.FS_BACKEND_DEV
      ? intl.formatMessage(commonMessages.HybritFsBackEndDev)
      : text === hybritProductDescriptions.FS_FRONTEND_DEV
      ? intl.formatMessage(commonMessages.HybritFsFrontEndDev)
      : text === hybritProductDescriptions.INTEG_DEV
      ? intl.formatMessage(commonMessages.IntegrationDev)
      : oldData.blocks[0].data.text;

  const data = {
    ...oldData,
    blocks: [{ data: { text: newText }, type: "paragraph" }],
  };

  React.useEffect(() => {
    if (oldData && editorContainer.current) {
      editor.current = new EditorJS({
        data,
        holder: editorContainer.current,
        readOnly: true,
        tools,
        minHeight: 30,
      });
    }

    return editor.current?.destroy;
  }, [jsonData]);

  return <S.Content ref={editorContainer} />;
};
