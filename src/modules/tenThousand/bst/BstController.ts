import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bst")
export default class BstController {
  @operation({
    summary: "Get Bst",
  })
  @get()
  static getBst = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bst",
  })
  @post("{id}")
  static createBst = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
