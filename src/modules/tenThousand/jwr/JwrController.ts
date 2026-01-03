import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jwrs")
export default class JwrController {
  @operation({
    summary: "Get Jwrs",
  })
  @get()
  static getJwrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jwr",
  })
  @post("{id}")
  static createJwr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
