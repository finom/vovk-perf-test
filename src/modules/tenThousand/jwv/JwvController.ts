import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jwv")
export default class JwvController {
  @operation({
    summary: "Get Jwv",
  })
  @get()
  static getJwv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jwv",
  })
  @post("{id}")
  static createJwv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
