import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bxms")
export default class BxmController {
  @operation({
    summary: "Get Bxms",
  })
  @get()
  static getBxms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bxm",
  })
  @post("{id}")
  static createBxm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
