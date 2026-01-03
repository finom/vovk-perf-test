import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bxns")
export default class BxnController {
  @operation({
    summary: "Get Bxns",
  })
  @get()
  static getBxns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bxn",
  })
  @post("{id}")
  static createBxn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
