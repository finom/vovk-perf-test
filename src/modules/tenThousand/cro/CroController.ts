import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cros")
export default class CroController {
  @operation({
    summary: "Get Cros",
  })
  @get()
  static getCros = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cro",
  })
  @post("{id}")
  static createCro = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
