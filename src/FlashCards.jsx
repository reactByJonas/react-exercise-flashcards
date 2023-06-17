import { useState } from 'react';

function FlashCards({ questions }) {
  const [selectedId, setSelectedId] = useState(0);

  return (
    <div className="flashcards">
      {questions.map((question) => {
        const classNames = selectedId === question.id ? 'selected' : '';
        return (
          <div
            className={classNames}
            onClick={() => {
              selectedId === question.id
                ? setSelectedId(0)
                : setSelectedId(question.id);
            }}
          >
            {selectedId === question.id ? question.answer : question.question}
          </div>
        );
      })}
    </div>
  );
}

export default FlashCards;
