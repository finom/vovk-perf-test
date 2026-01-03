import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lbvs")
export default class LbvController {
  @operation({
    summary: "Get Lbvs",
  })
  @get()
  static getLbvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lbv",
  })
  @post("{id}")
  static createLbv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
