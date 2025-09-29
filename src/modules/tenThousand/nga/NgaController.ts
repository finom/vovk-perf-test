import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ngas")
export default class NgaController {
  @operation({
    summary: "Get Ngas",
  })
  @get()
  static getNgas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nga",
  })
  @post("{id}")
  static createNga = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
