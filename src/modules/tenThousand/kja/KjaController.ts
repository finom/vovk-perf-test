import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kjas")
export default class KjaController {
  @operation({
    summary: "Get Kjas",
  })
  @get()
  static getKjas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kja",
  })
  @post("{id}")
  static createKja = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
