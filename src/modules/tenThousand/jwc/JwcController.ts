import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jwcs")
export default class JwcController {
  @operation({
    summary: "Get Jwcs",
  })
  @get()
  static getJwcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jwc",
  })
  @post("{id}")
  static createJwc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
