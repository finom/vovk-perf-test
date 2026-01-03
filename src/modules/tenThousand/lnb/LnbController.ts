import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lnbs")
export default class LnbController {
  @operation({
    summary: "Get Lnbs",
  })
  @get()
  static getLnbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lnb",
  })
  @post("{id}")
  static createLnb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
