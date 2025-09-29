import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jags")
export default class JagController {
  @operation({
    summary: "Get Jags",
  })
  @get()
  static getJags = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jag",
  })
  @post("{id}")
  static createJag = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
