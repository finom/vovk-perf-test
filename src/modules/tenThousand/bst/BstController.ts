import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bsts")
export default class BstController {
  @operation({
    summary: "Get Bsts",
  })
  @get()
  static getBsts = procedure({
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
