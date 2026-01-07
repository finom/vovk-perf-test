import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lbv")
export default class LbvController {
  @operation({
    summary: "Get Lbv",
  })
  @get()
  static getLbv = procedure({
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
