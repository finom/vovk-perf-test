import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cles")
export default class CleController {
  @operation({
    summary: "Get Cles",
  })
  @get()
  static getCles = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cle",
  })
  @post("{id}")
  static createCle = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
