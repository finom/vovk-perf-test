import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("tas")
export default class TaController {
  @operation({
    summary: "Get Tas",
  })
  @get()
  static getTas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ta",
  })
  @post("{id}")
  static createTa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
