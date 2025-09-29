import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("yas")
export default class YaController {
  @operation({
    summary: "Get Yas",
  })
  @get()
  static getYas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ya",
  })
  @post("{id}")
  static createYa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
