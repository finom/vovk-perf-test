import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jwts")
export default class JwtController {
  @operation({
    summary: "Get Jwts",
  })
  @get()
  static getJwts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jwt",
  })
  @post("{id}")
  static createJwt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
