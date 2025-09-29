import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mgqs")
export default class MgqController {
  @operation({
    summary: "Get Mgqs",
  })
  @get()
  static getMgqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mgq",
  })
  @post("{id}")
  static createMgq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
