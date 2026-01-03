import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lajs")
export default class LajController {
  @operation({
    summary: "Get Lajs",
  })
  @get()
  static getLajs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Laj",
  })
  @post("{id}")
  static createLaj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
