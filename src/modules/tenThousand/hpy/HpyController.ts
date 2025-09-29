import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hpies")
export default class HpyController {
  @operation({
    summary: "Get Hpies",
  })
  @get()
  static getHpies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hpy",
  })
  @post("{id}")
  static createHpy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
