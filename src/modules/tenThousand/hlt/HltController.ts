import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hlts")
export default class HltController {
  @operation({
    summary: "Get Hlts",
  })
  @get()
  static getHlts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hlt",
  })
  @post("{id}")
  static createHlt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
