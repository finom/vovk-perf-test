import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kbos")
export default class KboController {
  @operation({
    summary: "Get Kbos",
  })
  @get()
  static getKbos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kbo",
  })
  @post("{id}")
  static createKbo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
