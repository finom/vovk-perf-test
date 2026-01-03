import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hsgs")
export default class HsgController {
  @operation({
    summary: "Get Hsgs",
  })
  @get()
  static getHsgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hsg",
  })
  @post("{id}")
  static createHsg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
