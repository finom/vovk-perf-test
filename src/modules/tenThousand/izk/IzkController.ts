import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("izks")
export default class IzkController {
  @operation({
    summary: "Get Izks",
  })
  @get()
  static getIzks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Izk",
  })
  @post("{id}")
  static createIzk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
