import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("izvs")
export default class IzvController {
  @operation({
    summary: "Get Izvs",
  })
  @get()
  static getIzvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Izv",
  })
  @post("{id}")
  static createIzv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
