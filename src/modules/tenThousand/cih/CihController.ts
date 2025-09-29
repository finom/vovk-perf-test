import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cihs")
export default class CihController {
  @operation({
    summary: "Get Cihs",
  })
  @get()
  static getCihs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cih",
  })
  @post("{id}")
  static createCih = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
