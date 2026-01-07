import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jwt")
export default class JwtController {
  @operation({
    summary: "Get Jwt",
  })
  @get()
  static getJwt = procedure({
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
