import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jwz")
export default class JwzController {
  @operation({
    summary: "Get Jwz",
  })
  @get()
  static getJwz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jwz",
  })
  @post("{id}")
  static createJwz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
