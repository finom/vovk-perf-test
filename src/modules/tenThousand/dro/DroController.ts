import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dros")
export default class DroController {
  @operation({
    summary: "Get Dros",
  })
  @get()
  static getDros = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dro",
  })
  @post("{id}")
  static createDro = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
