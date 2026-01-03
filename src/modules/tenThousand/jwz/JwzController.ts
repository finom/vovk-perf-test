import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jwzs")
export default class JwzController {
  @operation({
    summary: "Get Jwzs",
  })
  @get()
  static getJwzs = procedure({
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
