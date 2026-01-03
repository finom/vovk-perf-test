import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aks")
export default class AkController {
  @operation({
    summary: "Get Aks",
  })
  @get()
  static getAks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ak",
  })
  @post("{id}")
  static createAk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
