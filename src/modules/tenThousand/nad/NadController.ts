import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nads")
export default class NadController {
  @operation({
    summary: "Get Nads",
  })
  @get()
  static getNads = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nad",
  })
  @post("{id}")
  static createNad = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
