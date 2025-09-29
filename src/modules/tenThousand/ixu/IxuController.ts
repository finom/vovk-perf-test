import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ixus")
export default class IxuController {
  @operation({
    summary: "Get Ixus",
  })
  @get()
  static getIxus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ixu",
  })
  @post("{id}")
  static createIxu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
