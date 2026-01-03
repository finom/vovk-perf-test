import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lkus")
export default class LkuController {
  @operation({
    summary: "Get Lkus",
  })
  @get()
  static getLkus = procedure({
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
