import { procedure, prefix, get, post, operation } from "vovk";

@prefix("alts")
export default class AltController {
  @operation({
    summary: "Get Alts",
  })
  @get()
  static getAlts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Alt",
  })
  @post("{id}")
  static createAlt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
