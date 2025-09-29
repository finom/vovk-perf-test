import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("moas")
export default class MoaController {
  @operation({
    summary: "Get Moas",
  })
  @get()
  static getMoas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Moa",
  })
  @post("{id}")
  static createMoa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
