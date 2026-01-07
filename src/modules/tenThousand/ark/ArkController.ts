import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ark")
export default class ArkController {
  @operation({
    summary: "Get Ark",
  })
  @get()
  static getArk = procedure({
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
