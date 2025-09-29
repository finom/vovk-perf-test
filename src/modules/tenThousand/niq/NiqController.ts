import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("niqs")
export default class NiqController {
  @operation({
    summary: "Get Niqs",
  })
  @get()
  static getNiqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Niq",
  })
  @post("{id}")
  static createNiq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
