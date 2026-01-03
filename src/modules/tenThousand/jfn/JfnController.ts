import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jfns")
export default class JfnController {
  @operation({
    summary: "Get Jfns",
  })
  @get()
  static getJfns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jfn",
  })
  @post("{id}")
  static createJfn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
