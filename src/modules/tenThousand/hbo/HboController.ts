import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hbos")
export default class HboController {
  @operation({
    summary: "Get Hbos",
  })
  @get()
  static getHbos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hbo",
  })
  @post("{id}")
  static createHbo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
