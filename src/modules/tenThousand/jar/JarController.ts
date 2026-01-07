import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jar")
export default class JarController {
  @operation({
    summary: "Get Jar",
  })
  @get()
  static getJar = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jar",
  })
  @post("{id}")
  static createJar = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
