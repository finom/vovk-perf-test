import { procedure, prefix, get, post, operation } from "vovk";

@prefix("arks")
export default class ArkController {
  @operation({
    summary: "Get Arks",
  })
  @get()
  static getArks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ark",
  })
  @post("{id}")
  static createArk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
