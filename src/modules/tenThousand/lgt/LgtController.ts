import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lgts")
export default class LgtController {
  @operation({
    summary: "Get Lgts",
  })
  @get()
  static getLgts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lgt",
  })
  @post("{id}")
  static createLgt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
