import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ixws")
export default class IxwController {
  @operation({
    summary: "Get Ixws",
  })
  @get()
  static getIxws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ixw",
  })
  @post("{id}")
  static createIxw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
