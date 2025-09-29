import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("efks")
export default class EfkController {
  @operation({
    summary: "Get Efks",
  })
  @get()
  static getEfks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Efk",
  })
  @post("{id}")
  static createEfk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
