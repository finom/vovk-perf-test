import { procedure, prefix, get, post, operation } from "vovk";

@prefix("xes")
export default class XeController {
  @operation({
    summary: "Get Xes",
  })
  @get()
  static getXes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Xe",
  })
  @post("{id}")
  static createXe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
