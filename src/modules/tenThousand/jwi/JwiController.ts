import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jwi")
export default class JwiController {
  @operation({
    summary: "Get Jwi",
  })
  @get()
  static getJwi = procedure({
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
