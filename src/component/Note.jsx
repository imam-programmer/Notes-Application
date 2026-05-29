import React, { useState } from "react";

const Note = () => {
  const [input, setinput] = useState("");
  const [textarea, settextarea] = useState("");
  const [content, setcontent] = useState([]);

  return (
    <div className=" md:flex gap-30 justify-between">
      <div className="md:w-125 shrink-0">
        <h1 className="h1">
          Add note
        </h1>
        <form
          action=""
          className="flex flex-col  gap-5"
          onSubmit={(e) => {
            e.preventDefault();
            const newContent = [...content];
            newContent.push({ input, textarea });
            setinput("");
            settextarea("");
            setcontent(newContent);
            console.log(content);
          }}
        >
          <input
            type="text"
            placeholder="Enter note heading"
            className="input w-full "
            value={input}
            onChange={(e) => {
              setinput(e.target.value);
            }}
          />
          <textarea
            name=""
            id=""
            placeholder="Enter details"
            className="textarea"
            value={textarea}
            onChange={(e) => {
              settextarea(e.target.value);
            }}
          ></textarea>
          <button className="button">Add</button>
        </form>
      </div>

      <div className="md:border-l-amber-50 md:border mt-10 md:w-[60%] h-screen">
        <h1 className="h1">
          See notes
        </h1>
        <div className="flex gap-2 flex-wrap  lg:pl-10">
          {content.map((item, idx) => {
            return (
              <div
                key={idx}
                className='bg-[url("./img/note.png")] bg-cover bg-center min-h-90 w-80 pt-4 pl-16 pr-12 pb-3 relative'
              >
                <h1 className="font-semibold capitalize">{item.input}</h1>
                <hr />
                <p className="text-[12px]">{item.textarea}</p>
                <button
                  className="btn"
                  onClick={() => {
                    const New = [...content];

                    New.splice(idx, 1);
                    setcontent(New);
                  }}
                >
                  Delete me
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>


  );
};

export default Note;
