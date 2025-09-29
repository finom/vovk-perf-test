import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aeos")
export default class AeoController {
  @operation({
    summary: "Get Aeos",
  })
  @get()
  static getAeos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aeo",
  })
  @post("{id}")
  static createAeo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
