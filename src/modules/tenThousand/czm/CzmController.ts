import { procedure, prefix, get, post, operation } from "vovk";

@prefix("czm")
export default class CzmController {
  @operation({
    summary: "Get Czm",
  })
  @get()
  static getCzm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Czm",
  })
  @post("{id}")
  static createCzm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
