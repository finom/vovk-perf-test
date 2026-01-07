import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jwx")
export default class JwxController {
  @operation({
    summary: "Get Jwx",
  })
  @get()
  static getJwx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jwx",
  })
  @post("{id}")
  static createJwx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
