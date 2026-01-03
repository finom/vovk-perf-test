import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bxls")
export default class BxlController {
  @operation({
    summary: "Get Bxls",
  })
  @get()
  static getBxls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bxl",
  })
  @post("{id}")
  static createBxl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
