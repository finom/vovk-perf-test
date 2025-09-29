import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hpxes")
export default class HpxController {
  @operation({
    summary: "Get Hpxes",
  })
  @get()
  static getHpxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hpx",
  })
  @post("{id}")
  static createHpx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
