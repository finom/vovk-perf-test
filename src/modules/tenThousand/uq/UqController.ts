import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("uqs")
export default class UqController {
  @operation({
    summary: "Get Uqs",
  })
  @get()
  static getUqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Uq",
  })
  @post("{id}")
  static createUq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
