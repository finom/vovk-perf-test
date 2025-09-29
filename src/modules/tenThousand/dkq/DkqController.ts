import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dkqs")
export default class DkqController {
  @operation({
    summary: "Get Dkqs",
  })
  @get()
  static getDkqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dkq",
  })
  @post("{id}")
  static createDkq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
