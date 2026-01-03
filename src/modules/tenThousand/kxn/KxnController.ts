import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kxns")
export default class KxnController {
  @operation({
    summary: "Get Kxns",
  })
  @get()
  static getKxns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kxn",
  })
  @post("{id}")
  static createKxn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
