import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jfn")
export default class JfnController {
  @operation({
    summary: "Get Jfn",
  })
  @get()
  static getJfn = procedure({
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
