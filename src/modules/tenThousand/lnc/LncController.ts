import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lncs")
export default class LncController {
  @operation({
    summary: "Get Lncs",
  })
  @get()
  static getLncs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lnc",
  })
  @post("{id}")
  static createLnc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
