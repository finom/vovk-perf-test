import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jwhs")
export default class JwhController {
  @operation({
    summary: "Get Jwhs",
  })
  @get()
  static getJwhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jwh",
  })
  @post("{id}")
  static createJwh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
