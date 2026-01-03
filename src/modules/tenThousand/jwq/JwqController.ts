import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jwqs")
export default class JwqController {
  @operation({
    summary: "Get Jwqs",
  })
  @get()
  static getJwqs = procedure({
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
