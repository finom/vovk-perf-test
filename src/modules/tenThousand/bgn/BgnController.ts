import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bgn")
export default class BgnController {
  @operation({
    summary: "Get Bgn",
  })
  @get()
  static getBgn = procedure({
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
