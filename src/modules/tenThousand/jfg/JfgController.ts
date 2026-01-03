import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jfgs")
export default class JfgController {
  @operation({
    summary: "Get Jfgs",
  })
  @get()
  static getJfgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jfg",
  })
  @post("{id}")
  static createJfg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
