import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nros")
export default class NroController {
  @operation({
    summary: "Get Nros",
  })
  @get()
  static getNros = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nro",
  })
  @post("{id}")
  static createNro = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
