import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gsp")
export default class GspController {
  @operation({
    summary: "Get Gsp",
  })
  @get()
  static getGsp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gsp",
  })
  @post("{id}")
  static createGsp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
