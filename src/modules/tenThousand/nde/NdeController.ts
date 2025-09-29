import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ndes")
export default class NdeController {
  @operation({
    summary: "Get Ndes",
  })
  @get()
  static getNdes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nde",
  })
  @post("{id}")
  static createNde = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
