import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lbgs")
export default class LbgController {
  @operation({
    summary: "Get Lbgs",
  })
  @get()
  static getLbgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lbg",
  })
  @post("{id}")
  static createLbg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
