import React, { useState } from "react";
import { fileTree } from "./data";
import "./App.css";

type TBranch = {
  name: string;
  children?: TBranch[];
};

function Branch({ branch, nestDepth }: { branch: TBranch; nestDepth: number }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div key={branch.name}>
      {branch.children ? (
        <button
          className={`branch ${isExpanded ? "expanded" : "collapsed"}`}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {" "}
          {isExpanded ? "⇩ " : "⇨ "} {branch.name}
        </button>
      ) : (
        <div className="file">⏿ {branch.name}</div>
      )}

      {isExpanded && (
        <div style={{ paddingLeft: `${nestDepth + 7}px` }}>
          {branch.children?.map((childBranch: TBranch) => (
            <Branch
              key={childBranch.name}
              branch={childBranch}
              nestDepth={nestDepth + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <>
      <section className="hero">
        <div className="mb-24 doll">🪆</div>
        <h2 className="text-2xl pb-20 font-bold font-mono">
          Expandable / Collapsible "File Tree"
        </h2>
      </section>

      <h3 className="mb-4 tracking-wide">
        Click on items with <span className="font-semibold ">arrows below</span>{" "}
        to show or hide nested content.
      </h3>
      <div className="tree App">
        {fileTree.children?.map((branch: TBranch) => (
          <Branch key={branch.name} branch={branch} nestDepth={1} />
        ))}
      </div>
    </>
  );
}

export default App;
