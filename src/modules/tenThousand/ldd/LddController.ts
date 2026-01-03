import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ldds")
export default class LddController {
  @operation({
    summary: "Get Ldds",
  })
  @get()
  static getLdds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ldd",
  })
  @post("{id}")
  static createLdd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
