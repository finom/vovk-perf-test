import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jwgs")
export default class JwgController {
  @operation({
    summary: "Get Jwgs",
  })
  @get()
  static getJwgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jwg",
  })
  @post("{id}")
  static createJwg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
