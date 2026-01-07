import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jwl")
export default class JwlController {
  @operation({
    summary: "Get Jwl",
  })
  @get()
  static getJwl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jwl",
  })
  @post("{id}")
  static createJwl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
