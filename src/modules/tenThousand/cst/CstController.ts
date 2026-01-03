import { procedure, prefix, get, post, operation } from "vovk";

@prefix("csts")
export default class CstController {
  @operation({
    summary: "Get Csts",
  })
  @get()
  static getCsts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cst",
  })
  @post("{id}")
  static createCst = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
