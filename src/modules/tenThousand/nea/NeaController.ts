import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("neas")
export default class NeaController {
  @operation({
    summary: "Get Neas",
  })
  @get()
  static getNeas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nea",
  })
  @post("{id}")
  static createNea = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
