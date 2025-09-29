import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fuos")
export default class FuoController {
  @operation({
    summary: "Get Fuos",
  })
  @get()
  static getFuos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fuo",
  })
  @post("{id}")
  static createFuo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
