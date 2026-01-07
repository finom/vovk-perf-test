import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lim")
export default class LimController {
  @operation({
    summary: "Get Lim",
  })
  @get()
  static getLim = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lim",
  })
  @post("{id}")
  static createLim = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
