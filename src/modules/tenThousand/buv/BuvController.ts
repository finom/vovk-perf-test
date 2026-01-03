import { procedure, prefix, get, post, operation } from "vovk";

@prefix("buvs")
export default class BuvController {
  @operation({
    summary: "Get Buvs",
  })
  @get()
  static getBuvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Buv",
  })
  @post("{id}")
  static createBuv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
