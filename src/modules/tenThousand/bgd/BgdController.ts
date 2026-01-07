import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bgd")
export default class BgdController {
  @operation({
    summary: "Get Bgd",
  })
  @get()
  static getBgd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bgd",
  })
  @post("{id}")
  static createBgd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
