import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("isks")
export default class IskController {
  @operation({
    summary: "Get Isks",
  })
  @get()
  static getIsks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Isk",
  })
  @post("{id}")
  static createIsk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
