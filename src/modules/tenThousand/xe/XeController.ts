import { procedure, prefix, get, post, operation } from "vovk";

@prefix("xe")
export default class XeController {
  @operation({
    summary: "Get Xe",
  })
  @get()
  static getXe = procedure({
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
