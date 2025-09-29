import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("las")
export default class LasController {
  @operation({
    summary: "Get Las",
  })
  @get()
  static getLas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Las",
  })
  @post("{id}")
  static createLas = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
