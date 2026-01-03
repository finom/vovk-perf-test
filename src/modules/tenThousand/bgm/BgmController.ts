import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bgms")
export default class BgmController {
  @operation({
    summary: "Get Bgms",
  })
  @get()
  static getBgms = procedure({
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
