import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("klqs")
export default class KlqController {
  @operation({
    summary: "Get Klqs",
  })
  @get()
  static getKlqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Klq",
  })
  @post("{id}")
  static createKlq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
