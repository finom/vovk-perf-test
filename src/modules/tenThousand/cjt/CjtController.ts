import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cjts")
export default class CjtController {
  @operation({
    summary: "Get Cjts",
  })
  @get()
  static getCjts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cjt",
  })
  @post("{id}")
  static createCjt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
