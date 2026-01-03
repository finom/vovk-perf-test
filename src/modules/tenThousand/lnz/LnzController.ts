import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lnzs")
export default class LnzController {
  @operation({
    summary: "Get Lnzs",
  })
  @get()
  static getLnzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lnz",
  })
  @post("{id}")
  static createLnz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
