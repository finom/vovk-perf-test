import { procedure, prefix, get, post, operation } from "vovk";

@prefix("guw")
export default class GuwController {
  @operation({
    summary: "Get Guw",
  })
  @get()
  static getGuw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Guw",
  })
  @post("{id}")
  static createGuw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
