import * as React from 'react';

// https://stackoverflow.com/a/56078619
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
//import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './portfolio.css';

library.add(fab);

const CardLeft = props => {
  const { imageName } = props;
  const emptyImage = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII=`;
  return (
    <div className="portfolio left">
      <img src={imageName ? `https://img.edseek.com/${imageName}.gif` : emptyImage} alt={imageName ? imageName : 'empty image'} />
    </div>
  );
};
const CardRight = props => {
  const { stack = [], repoUrl, children } = props;

  return (
    <div className="portfolio right">
      {children}
      <h3>Tech stack</h3>
      <ul className="tech-stack">
        {(stack.map(li => <li key={li}>{li}</li>))}
      </ul>
      <ul className="links">
        <li>
          <span><FontAwesomeIcon icon={['fab', 'github']} /></span>
          <a href={repoUrl}><span>GitHub repo</span></a>
        </li>
      </ul>
    </div>
  );
};

const Card = props => {
  const { title, repoUrl, imageName, stack, children } = props;
  return (
    <section className="portfolio">
      <h2>{title}</h2>
      <div>
        <CardLeft imageName={imageName} />
        <CardRight repoUrl={repoUrl} stack={stack}>
          {children}
        </CardRight>
      </div>
    </section>
  );
};

export default function Portfolio() {
  return (
    <>
      <Card
        title='Kubernetes API Schema Viewer'
        repoUrl='https://github.com/jboxman/kubernetes-api-docs'
        imageName='kasv'
        stack={['JavaScript', 'Remix', 'React', 'Kubernetes']}
      >
        <p>
          The Kubernetes API Schema Viewer (KASV) provides a dynamic view of your cluster's APIs. You deploy the application to your cluster as you would any other application.
        </p>
        <ul>
        <li>Locate any API available on your cluster, including Kubernetes built-ins and APIs provided through a custom resource definition (CRD).</li>
        <li>Vizualize and explore an API schema with the <a href="https://github.com/stoplightio/json-schema-viewer">Stoplight JSON schema viewer</a>.</li>
        <li>Bookmark any API's schema page for quick reference.</li>
        </ul>
      </Card>
      <Card
        title='asciidoc-aware-link-check'
        repoUrl='https://github.com/jboxman/asciidoc-aware-link-check'
        imageName='asciidoc-aware-link-check'
        stack={['JavaScript', 'Node.js', 'Asciidoctor.js']}
      >
        <p>
          Check URLs in AsciiDoc files.
        </p>
        <ul>
          <li>Works with AsciiDoc attributes and conditional statements.</li>
          <li>Supports passing in custom AsciiDoc attributes.</li>
          <li>CSV output mode for cataloging broken links for large numbers of files.</li>
          <li>Reads Asciidoc file names from stdin to support piping input from <code>find</code>.</li>
        </ul>
      </Card>
    </>
  );
}
