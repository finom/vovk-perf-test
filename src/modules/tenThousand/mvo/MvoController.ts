import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mvos")
export default class MvoController {
  @operation({
    summary: "Get Mvos",
  })
  @get()
  static getMvos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mvo",
  })
  @post("{id}")
  static createMvo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
