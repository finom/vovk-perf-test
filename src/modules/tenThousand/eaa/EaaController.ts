import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eaas")
export default class EaaController {
  @operation({
    summary: "Get Eaas",
  })
  @get()
  static getEaas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eaa",
  })
  @post("{id}")
  static createEaa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
