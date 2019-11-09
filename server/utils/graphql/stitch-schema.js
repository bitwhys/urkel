import path from "path"
import fs from "fs"
import { loadSchema } from "./load-schema"

const PROJECT_ROOT = process.cwd()
const TYPES_ROOT = path.resolve(PROJECT_ROOT, "server", "types")
const types = ["issue", "project", "task", "user", "comment"]

const getSchemas = async () => {
  const rootSchema = await loadSchema(TYPES_ROOT, "root-schema.graphql")
  const schemaTypes = await Promise.all(
    types.map(type => loadSchema(TYPES_ROOT, `${type}/${type}.graphql`))
  )
  const schema = [rootSchema, ...schemaTypes].join("\n")
  fs.writeFile(
    path.join(PROJECT_ROOT, "server", "utils/graphql", "schema.graphql"),
    schema,
    e => {
      if (e) {
        console.error(e)
      }
    }
  )
}
getSchemas().catch(e => console.error(e))
