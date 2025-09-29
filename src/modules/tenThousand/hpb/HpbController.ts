import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hpbs")
export default class HpbController {
  @operation({
    summary: "Get Hpbs",
  })
  @get()
  static getHpbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hpb",
  })
  @post("{id}")
  static createHpb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
