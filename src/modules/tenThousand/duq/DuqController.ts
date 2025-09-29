import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("duqs")
export default class DuqController {
  @operation({
    summary: "Get Duqs",
  })
  @get()
  static getDuqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Duq",
  })
  @post("{id}")
  static createDuq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
