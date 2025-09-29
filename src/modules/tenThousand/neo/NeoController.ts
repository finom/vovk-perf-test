import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("neos")
export default class NeoController {
  @operation({
    summary: "Get Neos",
  })
  @get()
  static getNeos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Neo",
  })
  @post("{id}")
  static createNeo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
