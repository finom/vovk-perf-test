import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hhks")
export default class HhkController {
  @operation({
    summary: "Get Hhks",
  })
  @get()
  static getHhks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hhk",
  })
  @post("{id}")
  static createHhk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
