import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jwq")
export default class JwqController {
  @operation({
    summary: "Get Jwq",
  })
  @get()
  static getJwq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jwq",
  })
  @post("{id}")
  static createJwq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
