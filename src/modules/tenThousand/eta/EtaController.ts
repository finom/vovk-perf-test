import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("etas")
export default class EtaController {
  @operation({
    summary: "Get Etas",
  })
  @get()
  static getEtas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eta",
  })
  @post("{id}")
  static createEta = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
