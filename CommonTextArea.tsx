import clsx from "clsx";
import { useLayoutEffect, useState } from "react";
export default function CommonTextArea({
  inputRef,
  isFocuse,
  isInputError,
  onChangeInput,
  handleKeyDown,
  setIsFocuse,
  textBoxValue,
  parentClassName,
  textAreaClassName,
  placeHolder,
}: {
  inputRef: React.RefObject<HTMLTextAreaElement>;
  isFocuse?: boolean;
  isInputError?: boolean;
  onChangeInput: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleKeyDown: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  setIsFocuse: React.Dispatch<React.SetStateAction<boolean>>;
  textBoxValue?: string;
  parentClassName?: string;
  textAreaClassName?: string;
  placeHolder?: string;
}) {
  const [scrollBar, setScrollBar] = useState<boolean>(false);
  useLayoutEffect(() => {
    const textArea: any =
      inputRef.current ?? document.getElementById("text_area_input");

    if (textArea) {
      textArea.style.height = "0px";
      const scrollHeight = textArea.scrollHeight;
      textArea.style.height = scrollHeight + "px";
      if (scrollHeight >= 200) {
        setScrollBar(true);
      } else {
        setScrollBar(false);
      }
    }
  }, [inputRef, textBoxValue]);
  return (
    <div
      className={clsx(
        {
          "form-input-error": isInputError,
          "ask-question-input-focus": isFocuse,
        },
        parentClassName
      )}
      onClick={() => {
        setIsFocuse(true);
      }}
    >
      <textarea
        id="text_area_input"
        ref={inputRef}
        className={clsx(textAreaClassName, "textarea_design", {
          "overflow-y-auto": scrollBar,
        })}
        placeholder={placeHolder}
        value={textBoxValue}
        onKeyDown={handleKeyDown}
        style={{ height: "57px" }}
        onChange={onChangeInput}
      />
    </div>
  );
}
