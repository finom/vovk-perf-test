import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nas")
export default class NaController {
  @operation({
    summary: "Get Nas",
  })
  @get()
  static getNas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Na",
  })
  @post("{id}")
  static createNa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
