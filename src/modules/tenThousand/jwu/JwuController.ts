import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jwu")
export default class JwuController {
  @operation({
    summary: "Get Jwu",
  })
  @get()
  static getJwu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jwu",
  })
  @post("{id}")
  static createJwu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
