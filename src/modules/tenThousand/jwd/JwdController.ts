import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jwds")
export default class JwdController {
  @operation({
    summary: "Get Jwds",
  })
  @get()
  static getJwds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jwd",
  })
  @post("{id}")
  static createJwd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
