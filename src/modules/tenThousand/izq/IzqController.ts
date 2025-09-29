import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("izqs")
export default class IzqController {
  @operation({
    summary: "Get Izqs",
  })
  @get()
  static getIzqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Izq",
  })
  @post("{id}")
  static createIzq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
