import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hxks")
export default class HxkController {
  @operation({
    summary: "Get Hxks",
  })
  @get()
  static getHxks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hxk",
  })
  @post("{id}")
  static createHxk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
