import fs from "fs"
import path from "path"

export const loadSchema = (context, name) =>
  new Promise((resolve, reject) => {
    const pathToSchema = path.join(context, name)
    fs.readFile(pathToSchema, { encoding: "utf-8" }, (error, schema) => {
      if (error) {
        return reject(error)
      }
      // console.log(schema)
      resolve(schema)
    })
  }).catch(err => console.error(err))
