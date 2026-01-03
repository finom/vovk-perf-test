import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jwus")
export default class JwuController {
  @operation({
    summary: "Get Jwus",
  })
  @get()
  static getJwus = procedure({
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
