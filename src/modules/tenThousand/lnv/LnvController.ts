import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lnv")
export default class LnvController {
  @operation({
    summary: "Get Lnv",
  })
  @get()
  static getLnv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lnv",
  })
  @post("{id}")
  static createLnv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
