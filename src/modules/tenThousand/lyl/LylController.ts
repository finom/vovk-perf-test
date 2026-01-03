import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lyls")
export default class LylController {
  @operation({
    summary: "Get Lyls",
  })
  @get()
  static getLyls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lyl",
  })
  @post("{id}")
  static createLyl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
