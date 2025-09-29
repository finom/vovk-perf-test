import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fcas")
export default class FcaController {
  @operation({
    summary: "Get Fcas",
  })
  @get()
  static getFcas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fca",
  })
  @post("{id}")
  static createFca = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
