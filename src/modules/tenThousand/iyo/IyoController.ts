import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iyos")
export default class IyoController {
  @operation({
    summary: "Get Iyos",
  })
  @get()
  static getIyos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iyo",
  })
  @post("{id}")
  static createIyo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
