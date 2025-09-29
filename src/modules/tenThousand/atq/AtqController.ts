import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("atqs")
export default class AtqController {
  @operation({
    summary: "Get Atqs",
  })
  @get()
  static getAtqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Atq",
  })
  @post("{id}")
  static createAtq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
