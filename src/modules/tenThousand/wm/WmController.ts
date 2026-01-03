import { procedure, prefix, get, post, operation } from "vovk";

@prefix("wms")
export default class WmController {
  @operation({
    summary: "Get Wms",
  })
  @get()
  static getWms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Wm",
  })
  @post("{id}")
  static createWm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
