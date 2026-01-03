import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hlgs")
export default class HlgController {
  @operation({
    summary: "Get Hlgs",
  })
  @get()
  static getHlgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hlg",
  })
  @post("{id}")
  static createHlg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
