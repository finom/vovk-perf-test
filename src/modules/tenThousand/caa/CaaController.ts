import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("caas")
export default class CaaController {
  @operation({
    summary: "Get Caas",
  })
  @get()
  static getCaas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Caa",
  })
  @post("{id}")
  static createCaa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
