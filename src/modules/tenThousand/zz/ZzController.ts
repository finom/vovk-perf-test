import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("zzes")
export default class ZzController {
  @operation({
    summary: "Get Zzes",
  })
  @get()
  static getZzes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Zz",
  })
  @post("{id}")
  static createZz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
