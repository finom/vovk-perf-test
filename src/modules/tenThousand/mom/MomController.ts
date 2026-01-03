import { procedure, prefix, get, post, operation } from "vovk";

@prefix("moms")
export default class MomController {
  @operation({
    summary: "Get Moms",
  })
  @get()
  static getMoms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mom",
  })
  @post("{id}")
  static createMom = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
