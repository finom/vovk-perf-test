import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jkus")
export default class JkuController {
  @operation({
    summary: "Get Jkus",
  })
  @get()
  static getJkus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jku",
  })
  @post("{id}")
  static createJku = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
