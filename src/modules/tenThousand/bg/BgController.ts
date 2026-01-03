import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bgs")
export default class BgController {
  @operation({
    summary: "Get Bgs",
  })
  @get()
  static getBgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bg",
  })
  @post("{id}")
  static createBg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
