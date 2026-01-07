import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jwp")
export default class JwpController {
  @operation({
    summary: "Get Jwp",
  })
  @get()
  static getJwp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jwp",
  })
  @post("{id}")
  static createJwp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
