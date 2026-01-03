import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gogs")
export default class GogController {
  @operation({
    summary: "Get Gogs",
  })
  @get()
  static getGogs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gog",
  })
  @post("{id}")
  static createGog = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
