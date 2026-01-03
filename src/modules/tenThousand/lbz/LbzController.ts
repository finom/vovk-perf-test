import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lbzs")
export default class LbzController {
  @operation({
    summary: "Get Lbzs",
  })
  @get()
  static getLbzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lbz",
  })
  @post("{id}")
  static createLbz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
