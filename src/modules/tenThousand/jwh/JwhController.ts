import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jwh")
export default class JwhController {
  @operation({
    summary: "Get Jwh",
  })
  @get()
  static getJwh = procedure({
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
