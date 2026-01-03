import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lbcs")
export default class LbcController {
  @operation({
    summary: "Get Lbcs",
  })
  @get()
  static getLbcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lbc",
  })
  @post("{id}")
  static createLbc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
