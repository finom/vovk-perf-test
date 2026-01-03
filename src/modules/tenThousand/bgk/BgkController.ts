import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bgks")
export default class BgkController {
  @operation({
    summary: "Get Bgks",
  })
  @get()
  static getBgks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bgk",
  })
  @post("{id}")
  static createBgk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
