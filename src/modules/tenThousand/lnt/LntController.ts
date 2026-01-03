import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lnts")
export default class LntController {
  @operation({
    summary: "Get Lnts",
  })
  @get()
  static getLnts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lnt",
  })
  @post("{id}")
  static createLnt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
