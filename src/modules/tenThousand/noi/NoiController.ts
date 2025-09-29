import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nois")
export default class NoiController {
  @operation({
    summary: "Get Nois",
  })
  @get()
  static getNois = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Noi",
  })
  @post("{id}")
  static createNoi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
