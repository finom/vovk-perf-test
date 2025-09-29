import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fros")
export default class FroController {
  @operation({
    summary: "Get Fros",
  })
  @get()
  static getFros = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fro",
  })
  @post("{id}")
  static createFro = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
