import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gwls")
export default class GwlController {
  @operation({
    summary: "Get Gwls",
  })
  @get()
  static getGwls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gwl",
  })
  @post("{id}")
  static createGwl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
