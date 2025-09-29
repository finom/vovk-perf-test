import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ixhs")
export default class IxhController {
  @operation({
    summary: "Get Ixhs",
  })
  @get()
  static getIxhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ixh",
  })
  @post("{id}")
  static createIxh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
