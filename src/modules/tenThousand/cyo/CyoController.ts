import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cyos")
export default class CyoController {
  @operation({
    summary: "Get Cyos",
  })
  @get()
  static getCyos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cyo",
  })
  @post("{id}")
  static createCyo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
