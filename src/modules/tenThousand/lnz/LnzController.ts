import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lnz")
export default class LnzController {
  @operation({
    summary: "Get Lnz",
  })
  @get()
  static getLnz = procedure({
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
