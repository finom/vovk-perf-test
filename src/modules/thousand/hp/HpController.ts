import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hps")
export default class HpController {
  @operation({
    summary: "Get Hps",
  })
  @get()
  static getHps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hp",
  })
  @post("{id}")
  static createHp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
