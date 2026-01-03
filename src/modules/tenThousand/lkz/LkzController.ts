import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lkzs")
export default class LkzController {
  @operation({
    summary: "Get Lkzs",
  })
  @get()
  static getLkzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lkz",
  })
  @post("{id}")
  static createLkz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
