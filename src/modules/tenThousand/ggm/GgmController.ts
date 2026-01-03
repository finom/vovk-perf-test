import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ggms")
export default class GgmController {
  @operation({
    summary: "Get Ggms",
  })
  @get()
  static getGgms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ggm",
  })
  @post("{id}")
  static createGgm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
