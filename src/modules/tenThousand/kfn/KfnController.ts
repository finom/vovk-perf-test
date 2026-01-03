import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kfns")
export default class KfnController {
  @operation({
    summary: "Get Kfns",
  })
  @get()
  static getKfns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kfn",
  })
  @post("{id}")
  static createKfn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
