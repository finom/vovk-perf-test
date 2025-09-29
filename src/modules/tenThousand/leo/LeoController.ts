import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("leos")
export default class LeoController {
  @operation({
    summary: "Get Leos",
  })
  @get()
  static getLeos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Leo",
  })
  @post("{id}")
  static createLeo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
