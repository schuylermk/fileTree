import React, { useState } from "react";

import "./App.css";

const fileTree = {
  children: [
    {
      name: "react_fileTree",
      children: [
        {
          name: "node_modules",
          children: [
            {
              name: "acorn",
              children: [
                {
                  name: "bin",
                  children: [
                    {
                      name: "acorn",
                    },
                  ],
                },
                {
                  name: "dist",
                  children: [
                    {
                      name: "acorn.d.mts",
                    },
                    {
                      name: "acorn.d.ts",
                    },
                    {
                      name: "acorn.js",
                    },
                    {
                      name: "acorn.mjs",
                    },
                    {
                      name: "bin.js",
                    },
                  ],
                },
              ],
            },
            {
              name: "chalk",
              children: [
                {
                  name: "types",
                  children: [
                    {
                      name: "index.d.ts",
                    },
                  ],
                },
                {
                  name: "index.js",
                },
                {
                  name: "index.js.flow",
                },
                {
                  name: "license",
                },
                {
                  name: "package.json",
                },
                {
                  name: "readme.md",
                },
                {
                  name: "template.js",
                },
              ],
            },
            {
              name: "escalade",
              children: [
                {
                  name: "dist",
                  children: [
                    {
                      name: "index.js",
                    },
                    {
                      name: "index.mjs",
                    },
                  ],
                },
                {
                  name: "sync",
                  children: [
                    {
                      name: "index.d.ts",
                    },
                    {
                      name: "index.js",
                    },
                    {
                      name: "index.mjs",
                    },
                  ],
                },
                {
                  name: "index.d.ts",
                },
                {
                  name: "license",
                },
                {
                  name: "package.json",
                },
                {
                  name: "readme.md",
                },
              ],
            },
            {
              name: "ms",
              children: [
                {
                  name: "index.js",
                },
                {
                  name: "license.md",
                },
                {
                  name: "package.json",
                },
                {
                  name: "readme.md",
                },
              ],
            },
          ],
        },
        {
          name: "src",
          children: [
            {
              name: "assets",
              children: [
                {
                  name: "react.svg",
                },
              ],
            },
            {
              name: "App.css",
            },
            {
              name: "App,jsx",
            },
            {
              name: "index.css",
            },
            {
              name: "main.jsx",
            },
          ],
        },
        {
          name: ".eslintrc.cjs",
        },
        {
          name: ".gitignore",
        },
        {
          name: "index.html",
        },
        {
          name: "package-lock.json",
        },
        {
          name: "package.json",
        },
        {
          name: "README.md",
        },
        {
          name: "vite.config.js",
        },
      ],
    },
  ],
};

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
