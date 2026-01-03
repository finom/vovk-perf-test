import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gfls")
export default class GflController {
  @operation({
    summary: "Get Gfls",
  })
  @get()
  static getGfls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gfl",
  })
  @post("{id}")
  static createGfl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
