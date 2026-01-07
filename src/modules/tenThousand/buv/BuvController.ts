import { procedure, prefix, get, post, operation } from "vovk";

@prefix("buv")
export default class BuvController {
  @operation({
    summary: "Get Buv",
  })
  @get()
  static getBuv = procedure({
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
