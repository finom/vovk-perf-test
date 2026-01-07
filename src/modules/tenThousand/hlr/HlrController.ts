import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hlr")
export default class HlrController {
  @operation({
    summary: "Get Hlr",
  })
  @get()
  static getHlr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hlr",
  })
  @post("{id}")
  static createHlr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
