import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("faes")
export default class FaeController {
  @operation({
    summary: "Get Faes",
  })
  @get()
  static getFaes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fae",
  })
  @post("{id}")
  static createFae = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
