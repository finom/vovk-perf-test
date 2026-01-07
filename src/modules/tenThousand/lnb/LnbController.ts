import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lnb")
export default class LnbController {
  @operation({
    summary: "Get Lnb",
  })
  @get()
  static getLnb = procedure({
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
