'use client';

import Link from 'next/link';
import AppShell from '@/components/AppShell';

export default function IntegratePage() {
  return (
    <AppShell>
      <div className="content">
        <div className="gs-breadcrumb">
          <Link href="/getting-started">Getting Started</Link>
          <span className="gs-breadcrumb-sep">/</span>
          <span>Use It Programmatically</span>
        </div>

        <h1>Use It Programmatically</h1>
        <p className="gs-page-lead">
          Parse, validate, traverse, and convert specs in code. The SDK gives
          you typed access to everything in the spec.
        </p>

        <div className="gs-section">
          <h2>Install as a dependency</h2>
          <p>
            Add the SDK to your project:
          </p>
          <pre className="gs-code gs-code-terminal"><span className="gs-prompt">$ </span>npm install @specforge/sdk</pre>
        </div>

        <div className="gs-section">
          <h2>Parse any format</h2>
          <p>
            The SDK handles JSON, YAML, and TOML. You get back a typed object
            regardless of the source format:
          </p>
          <pre className="gs-code">{`import { parse } from '@specforge/sdk';

// Auto-detects format from extension
const spec = await parse('./todo-api.sf.json');

// Or parse a string directly
const spec2 = parse.json(jsonString);
const spec3 = parse.yaml(yamlString);
const spec4 = parse.toml(tomlString);

console.log(spec.project.name); // "todo-api"
console.log(spec.specforge);    // "1.0"`}</pre>
        </div>

        <div className="gs-section">
          <h2>Validate</h2>
          <p>
            Programmatic validation returns structured results you can act on:
          </p>
          <pre className="gs-code">{`import { validate } from '@specforge/sdk';

const result = validate(spec);

if (result.valid) {
  console.log('Spec is valid');
} else {
  for (const error of result.errors) {
    console.error(\`[\${error.path}] \${error.message}\`);
    // [/specifications/0/epics/0/tickets/0] must have required property 'status'
  }
}

// Check specific aspects
const deps = validate.dependencies(spec);
// { acyclic: true, danglingRefs: [], unreachable: [] }`}</pre>
        </div>

        <div className="gs-section">
          <h2>Traverse the hierarchy</h2>
          <p>
            Walk specs, epics, and tickets without manual nesting:
          </p>
          <pre className="gs-code">{`import { traverse } from '@specforge/sdk';

// Visit every ticket in the spec
traverse.tickets(spec, (ticket, epic, specification) => {
  console.log(\`[\${specification.id}] [\${epic.id}] \${ticket.title}\`);
  // [spec-todo-api] [epic-core] POST /todos
  // [spec-todo-api] [epic-core] GET /todos
  // [spec-todo-api] [epic-core] DELETE /todos/:id
});

// Find a ticket by ID across all specs and epics
const ticket = traverse.findTicket(spec, 'ticket-create-todo');

// Get all tickets matching a filter
const open = traverse.filterTickets(spec, t => t.status === 'open');`}</pre>
        </div>

        <div className="gs-section">
          <h2>Resolve the dependency graph</h2>
          <p>
            Build a dependency graph and query it for actionable tickets,
            blocked tickets, or the critical path:
          </p>
          <pre className="gs-code">{`import { graph } from '@specforge/sdk';

const g = graph.build(spec);

// What can be worked on right now?
const actionable = g.actionable();
// [{ id: 'ticket-create-todo', ... }]

// What is blocked and why?
const blocked = g.blocked();
// [{ id: 'ticket-list-todos', blockedBy: ['ticket-create-todo'] }, ...]

// Topological order for sequential execution
const order = g.topologicalSort();
// ['ticket-create-todo', 'ticket-list-todos', 'ticket-delete-todo']

// Critical path (longest chain)
const critical = g.criticalPath();
// ['ticket-create-todo', 'ticket-list-todos']`}</pre>
        </div>

        <div className="gs-section">
          <h2>Convert between formats</h2>
          <p>
            Convert specs between JSON, YAML, and TOML:
          </p>
          <pre className="gs-code">{`import { convert } from '@specforge/sdk';

// JSON → YAML
const yaml = convert.toYaml(spec);

// JSON → TOML
const toml = convert.toToml(spec);

// Write to file (auto-detects from extension)
await convert.toFile(spec, './todo-api.sf.yaml');`}</pre>
        </div>

        <div className="gs-section">
          <h2>What you can build</h2>
          <p>
            SpecForge is an open format. Here are some things people are building
            with the SDK:
          </p>
          <div className="gs-build-grid">
            <div className="gs-build-card">
              <h3>Agent Orchestrators</h3>
              <p>
                Feed the dependency graph to an agent scheduler. Each agent picks
                up actionable tickets, marks them done, and unblocks the next
                wave.
              </p>
            </div>
            <div className="gs-build-card">
              <h3>Project Dashboards</h3>
              <p>
                Parse the spec and render progress by epic, spec, or ticket
                status. No database required — the spec file is the source of
                truth.
              </p>
            </div>
            <div className="gs-build-card">
              <h3>CI Validators</h3>
              <p>
                Block merges when the spec has circular dependencies, dangling
                references, or missing required fields. Shift left on spec
                quality.
              </p>
            </div>
            <div className="gs-build-card">
              <h3>Code Generators</h3>
              <p>
                Read blueprint schemas and ticket acceptance criteria to scaffold
                boilerplate — routes, models, tests — directly from the spec.
              </p>
            </div>
          </div>
        </div>

        <div className="gs-nav-footer">
          <Link href="/getting-started/validate" className="gs-nav-prev">
            ← Validate It
          </Link>
          <Link href="/schema" className="gs-nav-next">
            Explore the Schema →
          </Link>
        </div>

        <div className="gs-closing">
          <p>
            That&apos;s the full tour. You have a spec, it validates, and you can
            work with it in code. The format is open, the tooling is yours to
            extend.
          </p>
        </div>
      </div>
    </AppShell>
  );
}
