import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gabs")
export default class GabController {
  @operation({
    summary: "Get Gabs",
  })
  @get()
  static getGabs = procedure({
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
