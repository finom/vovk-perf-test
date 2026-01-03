import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lbps")
export default class LbpController {
  @operation({
    summary: "Get Lbps",
  })
  @get()
  static getLbps = procedure({
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
