import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bgns")
export default class BgnController {
  @operation({
    summary: "Get Bgns",
  })
  @get()
  static getBgns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bgn",
  })
  @post("{id}")
  static createBgn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
