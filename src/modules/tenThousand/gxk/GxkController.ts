import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gxks")
export default class GxkController {
  @operation({
    summary: "Get Gxks",
  })
  @get()
  static getGxks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gxk",
  })
  @post("{id}")
  static createGxk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
