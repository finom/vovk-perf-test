import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dias")
export default class DiaController {
  @operation({
    summary: "Get Dias",
  })
  @get()
  static getDias = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dia",
  })
  @post("{id}")
  static createDia = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
