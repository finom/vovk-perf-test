import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jww")
export default class JwwController {
  @operation({
    summary: "Get Jww",
  })
  @get()
  static getJww = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jww",
  })
  @post("{id}")
  static createJww = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
