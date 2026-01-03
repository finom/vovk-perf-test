import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ks")
export default class KController {
  @operation({
    summary: "Get KS",
  })
  @get()
  static getKS = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create K",
  })
  @post("{id}")
  static createK = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
