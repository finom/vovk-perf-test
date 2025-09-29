import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jiws")
export default class JiwController {
  @operation({
    summary: "Get Jiws",
  })
  @get()
  static getJiws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jiw",
  })
  @post("{id}")
  static createJiw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
