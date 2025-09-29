import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ayos")
export default class AyoController {
  @operation({
    summary: "Get Ayos",
  })
  @get()
  static getAyos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ayo",
  })
  @post("{id}")
  static createAyo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
