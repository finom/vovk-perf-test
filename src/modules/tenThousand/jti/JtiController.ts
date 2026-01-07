import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jti")
export default class JtiController {
  @operation({
    summary: "Get Jti",
  })
  @get()
  static getJti = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jti",
  })
  @post("{id}")
  static createJti = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
