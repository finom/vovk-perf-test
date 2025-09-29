import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kvos")
export default class KvoController {
  @operation({
    summary: "Get Kvos",
  })
  @get()
  static getKvos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kvo",
  })
  @post("{id}")
  static createKvo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
