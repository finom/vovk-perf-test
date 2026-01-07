import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lpv")
export default class LpvController {
  @operation({
    summary: "Get Lpv",
  })
  @get()
  static getLpv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lpv",
  })
  @post("{id}")
  static createLpv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
