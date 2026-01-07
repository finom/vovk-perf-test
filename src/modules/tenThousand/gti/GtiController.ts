import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gti")
export default class GtiController {
  @operation({
    summary: "Get Gti",
  })
  @get()
  static getGti = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gti",
  })
  @post("{id}")
  static createGti = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
