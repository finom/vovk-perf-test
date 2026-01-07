import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gxt")
export default class GxtController {
  @operation({
    summary: "Get Gxt",
  })
  @get()
  static getGxt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gxt",
  })
  @post("{id}")
  static createGxt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
