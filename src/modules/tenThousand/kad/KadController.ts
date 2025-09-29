import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kads")
export default class KadController {
  @operation({
    summary: "Get Kads",
  })
  @get()
  static getKads = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kad",
  })
  @post("{id}")
  static createKad = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
