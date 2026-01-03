import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lnfs")
export default class LnfController {
  @operation({
    summary: "Get Lnfs",
  })
  @get()
  static getLnfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lnf",
  })
  @post("{id}")
  static createLnf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
