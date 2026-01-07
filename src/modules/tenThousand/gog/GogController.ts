import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gog")
export default class GogController {
  @operation({
    summary: "Get Gog",
  })
  @get()
  static getGog = procedure({
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
