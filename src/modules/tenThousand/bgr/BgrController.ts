import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bgr")
export default class BgrController {
  @operation({
    summary: "Get Bgr",
  })
  @get()
  static getBgr = procedure({
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
