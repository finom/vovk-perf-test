import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lnc")
export default class LncController {
  @operation({
    summary: "Get Lnc",
  })
  @get()
  static getLnc = procedure({
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
