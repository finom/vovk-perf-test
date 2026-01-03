import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bgrs")
export default class BgrController {
  @operation({
    summary: "Get Bgrs",
  })
  @get()
  static getBgrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bgr",
  })
  @post("{id}")
  static createBgr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
