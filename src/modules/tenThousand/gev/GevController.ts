import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gev")
export default class GevController {
  @operation({
    summary: "Get Gev",
  })
  @get()
  static getGev = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gev",
  })
  @post("{id}")
  static createGev = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
