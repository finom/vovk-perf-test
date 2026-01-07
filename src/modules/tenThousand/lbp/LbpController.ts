import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lbp")
export default class LbpController {
  @operation({
    summary: "Get Lbp",
  })
  @get()
  static getLbp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lbp",
  })
  @post("{id}")
  static createLbp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
