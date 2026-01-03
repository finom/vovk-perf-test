import { procedure, prefix, get, post, operation } from "vovk";

@prefix("czms")
export default class CzmController {
  @operation({
    summary: "Get Czms",
  })
  @get()
  static getCzms = procedure({
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
