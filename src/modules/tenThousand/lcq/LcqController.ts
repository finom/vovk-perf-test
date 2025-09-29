import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lcqs")
export default class LcqController {
  @operation({
    summary: "Get Lcqs",
  })
  @get()
  static getLcqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lcq",
  })
  @post("{id}")
  static createLcq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
