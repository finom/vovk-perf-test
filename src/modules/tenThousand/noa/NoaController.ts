import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("noas")
export default class NoaController {
  @operation({
    summary: "Get Noas",
  })
  @get()
  static getNoas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Noa",
  })
  @post("{id}")
  static createNoa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
