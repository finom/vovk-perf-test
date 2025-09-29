import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jwrs")
export default class JwrController {
  @operation({
    summary: "Get Jwrs",
  })
  @get()
  static getJwrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jwr",
  })
  @post("{id}")
  static createJwr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
