import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bgm")
export default class BgmController {
  @operation({
    summary: "Get Bgm",
  })
  @get()
  static getBgm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bgm",
  })
  @post("{id}")
  static createBgm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
