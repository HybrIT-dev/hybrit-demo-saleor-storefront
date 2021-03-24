import EditorJS, {
  OutputData,
  ToolConstructable,
  ToolSettings,
} from "@editorjs/editorjs";

import { useIntl } from "react-intl";
import { commonMessages } from "@temp/intl";
import { hybritAbout, hybritProductDescriptions } from "@utils/misc";

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

  const { blocks } = oldData;

  const newBlocks = blocks.map((block: any) => {
    const { text } = block.data;
    const formatBlock = (value: string) => {
      return { ...block, data: { text: value } };
    };
    return text?.includes(hybritProductDescriptions.FS_BACKEND_DEV)
      ? formatBlock(intl.formatMessage(commonMessages.hybritFsBackEndDev))
      : text?.includes(hybritProductDescriptions.FS_FRONTEND_DEV)
      ? formatBlock(intl.formatMessage(commonMessages.hybritFsFrontEndDev))
      : text?.includes(hybritProductDescriptions.INTEG_DEV)
      ? formatBlock(intl.formatMessage(commonMessages.integrationDev))
      : text?.includes(hybritProductDescriptions.HYBRIT_BEER)
      ? formatBlock(intl.formatMessage(commonMessages.hybritBeerDescription))
      : text?.includes(hybritProductDescriptions.HYBRIT_GINGER_BEER)
      ? formatBlock(
          intl.formatMessage(commonMessages.hybritGingerBeerDescription)
        )
      : text?.includes(hybritProductDescriptions.HYBRIT_PEN)
      ? formatBlock(intl.formatMessage(commonMessages.hybritPenDescription))
      : text?.includes(hybritProductDescriptions.HYBRIT_SSD)
      ? formatBlock(intl.formatMessage(commonMessages.hybritExtSSDDescription))
      : text?.includes(hybritProductDescriptions.HYBRIT_CUP)
      ? formatBlock(
          intl.formatMessage(commonMessages.hybritCoffeeCupDescription)
        )
      : text?.includes(hybritAbout.HYBRIT_ABOUT_HEADER)
      ? formatBlock(intl.formatMessage(commonMessages.hybritAboutHeader))
      : text?.includes(hybritAbout.HYBRIT_ABOUT_P1)
      ? formatBlock(intl.formatMessage(commonMessages.hybritAboutP1))
      : text?.includes(hybritAbout.HYBRIT_ABOUT_P2)
      ? formatBlock(intl.formatMessage(commonMessages.hybritAboutP2))
      : text?.includes(hybritAbout.HYBRIT_ABOUT_P3)
      ? formatBlock(intl.formatMessage(commonMessages.hybritAboutP3))
      : { ...block, data: { text } };
  });

  const data = {
    ...oldData,
    blocks: newBlocks,
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
