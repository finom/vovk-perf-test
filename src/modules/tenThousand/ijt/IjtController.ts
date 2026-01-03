import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ijts")
export default class IjtController {
  @operation({
    summary: "Get Ijts",
  })
  @get()
  static getIjts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ijt",
  })
  @post("{id}")
  static createIjt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
