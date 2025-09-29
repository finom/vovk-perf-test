import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ddqs")
export default class DdqController {
  @operation({
    summary: "Get Ddqs",
  })
  @get()
  static getDdqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ddq",
  })
  @post("{id}")
  static createDdq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
