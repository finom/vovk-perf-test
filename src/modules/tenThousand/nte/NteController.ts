import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ntes")
export default class NteController {
  @operation({
    summary: "Get Ntes",
  })
  @get()
  static getNtes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nte",
  })
  @post("{id}")
  static createNte = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
