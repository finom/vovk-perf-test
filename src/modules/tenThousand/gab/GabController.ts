import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gab")
export default class GabController {
  @operation({
    summary: "Get Gab",
  })
  @get()
  static getGab = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gab",
  })
  @post("{id}")
  static createGab = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
