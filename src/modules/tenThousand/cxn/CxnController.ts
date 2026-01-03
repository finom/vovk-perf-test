import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cxns")
export default class CxnController {
  @operation({
    summary: "Get Cxns",
  })
  @get()
  static getCxns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cxn",
  })
  @post("{id}")
  static createCxn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
