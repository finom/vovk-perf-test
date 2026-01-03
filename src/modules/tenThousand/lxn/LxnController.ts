import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lxns")
export default class LxnController {
  @operation({
    summary: "Get Lxns",
  })
  @get()
  static getLxns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lxn",
  })
  @post("{id}")
  static createLxn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
