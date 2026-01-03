import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jwks")
export default class JwkController {
  @operation({
    summary: "Get Jwks",
  })
  @get()
  static getJwks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jwk",
  })
  @post("{id}")
  static createJwk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
