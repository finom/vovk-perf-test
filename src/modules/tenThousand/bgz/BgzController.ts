import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bgzs")
export default class BgzController {
  @operation({
    summary: "Get Bgzs",
  })
  @get()
  static getBgzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bgz",
  })
  @post("{id}")
  static createBgz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
