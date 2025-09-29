import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("chs")
export default class ChsController {
  @operation({
    summary: "Get Chs",
  })
  @get()
  static getChs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Chs",
  })
  @post("{id}")
  static createChs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
