import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jws")
export default class JwsController {
  @operation({
    summary: "Get Jws",
  })
  @get()
  static getJws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jws",
  })
  @post("{id}")
  static createJws = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
