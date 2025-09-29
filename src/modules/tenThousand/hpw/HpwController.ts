import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hpws")
export default class HpwController {
  @operation({
    summary: "Get Hpws",
  })
  @get()
  static getHpws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hpw",
  })
  @post("{id}")
  static createHpw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
