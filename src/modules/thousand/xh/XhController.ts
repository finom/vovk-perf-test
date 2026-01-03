import { procedure, prefix, get, post, operation } from "vovk";

@prefix("xhs")
export default class XhController {
  @operation({
    summary: "Get Xhs",
  })
  @get()
  static getXhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Xh",
  })
  @post("{id}")
  static createXh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
