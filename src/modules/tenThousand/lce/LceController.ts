import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lce")
export default class LceController {
  @operation({
    summary: "Get Lce",
  })
  @get()
  static getLce = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lce",
  })
  @post("{id}")
  static createLce = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
