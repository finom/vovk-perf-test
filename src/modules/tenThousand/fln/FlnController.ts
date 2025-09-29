import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("flns")
export default class FlnController {
  @operation({
    summary: "Get Flns",
  })
  @get()
  static getFlns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fln",
  })
  @post("{id}")
  static createFln = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
