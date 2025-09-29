import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("moqs")
export default class MoqController {
  @operation({
    summary: "Get Moqs",
  })
  @get()
  static getMoqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Moq",
  })
  @post("{id}")
  static createMoq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
