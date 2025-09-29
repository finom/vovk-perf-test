import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jgws")
export default class JgwController {
  @operation({
    summary: "Get Jgws",
  })
  @get()
  static getJgws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jgw",
  })
  @post("{id}")
  static createJgw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
