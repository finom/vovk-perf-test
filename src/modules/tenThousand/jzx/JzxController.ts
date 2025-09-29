import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jzxes")
export default class JzxController {
  @operation({
    summary: "Get Jzxes",
  })
  @get()
  static getJzxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jzx",
  })
  @post("{id}")
  static createJzx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
