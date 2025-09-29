import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mros")
export default class MroController {
  @operation({
    summary: "Get Mros",
  })
  @get()
  static getMros = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mro",
  })
  @post("{id}")
  static createMro = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
