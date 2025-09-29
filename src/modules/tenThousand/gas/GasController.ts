import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gases")
export default class GasController {
  @operation({
    summary: "Get Gases",
  })
  @get()
  static getGases = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gas",
  })
  @post("{id}")
  static createGas = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
