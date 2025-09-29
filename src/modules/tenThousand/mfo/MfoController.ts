import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mfos")
export default class MfoController {
  @operation({
    summary: "Get Mfos",
  })
  @get()
  static getMfos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mfo",
  })
  @post("{id}")
  static createMfo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
