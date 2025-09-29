import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jzws")
export default class JzwController {
  @operation({
    summary: "Get Jzws",
  })
  @get()
  static getJzws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jzw",
  })
  @post("{id}")
  static createJzw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
