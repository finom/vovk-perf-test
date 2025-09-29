import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gcas")
export default class GcaController {
  @operation({
    summary: "Get Gcas",
  })
  @get()
  static getGcas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gca",
  })
  @post("{id}")
  static createGca = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
