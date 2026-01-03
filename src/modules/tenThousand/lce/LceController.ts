import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lces")
export default class LceController {
  @operation({
    summary: "Get Lces",
  })
  @get()
  static getLces = procedure({
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
