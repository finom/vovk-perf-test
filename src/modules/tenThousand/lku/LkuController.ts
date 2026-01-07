import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lku")
export default class LkuController {
  @operation({
    summary: "Get Lku",
  })
  @get()
  static getLku = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lku",
  })
  @post("{id}")
  static createLku = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
