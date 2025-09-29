import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mos")
export default class MoController {
  @operation({
    summary: "Get Mos",
  })
  @get()
  static getMos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mo",
  })
  @post("{id}")
  static createMo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
