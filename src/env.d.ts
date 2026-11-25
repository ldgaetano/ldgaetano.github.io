/// <reference types="astro/client" />

// Lets TypeScript treat YAML imports (src/data/publications.yaml) as data.
declare module '*.yaml' {
  const value: unknown;
  export default value;
}
