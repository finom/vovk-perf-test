import { procedure, prefix, get, post, operation } from "vovk";

@prefix("xh")
export default class XhController {
  @operation({
    summary: "Get Xh",
  })
  @get()
  static getXh = procedure({
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
