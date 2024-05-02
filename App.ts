 
const inputRef = useRef<HTMLTextAreaElement | null>(null);
  const [isInputError, setIsInputError] = useState<boolean>(false);
  const [isFocuse, setIsFocuse] = useState<boolean>(false);

  const onChangeInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setChatPrompt(e.target.value);
    setIsInputError(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    setIsFocuse(true);

    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (!isLoadingFollowUpAnswer) {
        onSubmitForm();
      }
    }
  };

  const onFocus = () => {
    if (window.innerWidth >= 767) {
      setIsFocuse(true);
    } else {
      setIsFocuse(false);
    }
  };
  useOnClickOutside(inputRef, () => {
    if (prompt.length === 0) {
      setIsInputError(false);
      setIsFocuse(false);
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmitForm();
  };
  useEffect(() => {
    onFocus();
  }, [window.innerWidth]);


 <CommonTextArea
              inputRef={inputRef}
              isFocuse={isFocuse}
              isInputError={isInputError}
              onChangeInput={onChangeInput}
              handleKeyDown={handleKeyDown}
              setIsFocuse={setIsFocuse}
              textBoxValue={isLoadingFollowUpAnswer ? "" : chatPrompt}
              parentClassName={"text_area_parent "}
              textAreaClassName={"ask-question-input "}
              placeHolder={"Ask me anything..."}
            />
