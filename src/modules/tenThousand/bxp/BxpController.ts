import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bxp")
export default class BxpController {
  @operation({
    summary: "Get Bxp",
  })
  @get()
  static getBxp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bxp",
  })
  @post("{id}")
  static createBxp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
