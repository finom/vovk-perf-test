import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kfn")
export default class KfnController {
  @operation({
    summary: "Get Kfn",
  })
  @get()
  static getKfn = procedure({
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
