import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jwis")
export default class JwiController {
  @operation({
    summary: "Get Jwis",
  })
  @get()
  static getJwis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jwi",
  })
  @post("{id}")
  static createJwi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
