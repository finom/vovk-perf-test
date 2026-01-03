import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bfgs")
export default class BfgController {
  @operation({
    summary: "Get Bfgs",
  })
  @get()
  static getBfgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bfg",
  })
  @post("{id}")
  static createBfg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
