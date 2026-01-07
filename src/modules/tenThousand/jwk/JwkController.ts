import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jwk")
export default class JwkController {
  @operation({
    summary: "Get Jwk",
  })
  @get()
  static getJwk = procedure({
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
