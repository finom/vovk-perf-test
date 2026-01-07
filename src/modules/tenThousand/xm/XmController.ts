import { procedure, prefix, get, post, operation } from "vovk";

@prefix("xm")
export default class XmController {
  @operation({
    summary: "Get Xm",
  })
  @get()
  static getXm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Xm",
  })
  @post("{id}")
  static createXm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
