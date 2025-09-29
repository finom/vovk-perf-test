import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("njas")
export default class NjaController {
  @operation({
    summary: "Get Njas",
  })
  @get()
  static getNjas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nja",
  })
  @post("{id}")
  static createNja = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
