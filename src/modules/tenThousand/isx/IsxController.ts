import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("isxes")
export default class IsxController {
  @operation({
    summary: "Get Isxes",
  })
  @get()
  static getIsxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Isx",
  })
  @post("{id}")
  static createIsx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
