import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bgb")
export default class BgbController {
  @operation({
    summary: "Get Bgb",
  })
  @get()
  static getBgb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bgb",
  })
  @post("{id}")
  static createBgb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
