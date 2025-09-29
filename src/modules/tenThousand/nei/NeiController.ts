import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("neis")
export default class NeiController {
  @operation({
    summary: "Get Neis",
  })
  @get()
  static getNeis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nei",
  })
  @post("{id}")
  static createNei = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
