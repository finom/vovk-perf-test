import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jwj")
export default class JwjController {
  @operation({
    summary: "Get Jwj",
  })
  @get()
  static getJwj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jwj",
  })
  @post("{id}")
  static createJwj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
