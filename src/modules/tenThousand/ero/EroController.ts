import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eros")
export default class EroController {
  @operation({
    summary: "Get Eros",
  })
  @get()
  static getEros = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ero",
  })
  @post("{id}")
  static createEro = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
