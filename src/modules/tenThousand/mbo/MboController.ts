import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mbos")
export default class MboController {
  @operation({
    summary: "Get Mbos",
  })
  @get()
  static getMbos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mbo",
  })
  @post("{id}")
  static createMbo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
