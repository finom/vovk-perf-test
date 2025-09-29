import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mqqs")
export default class MqqController {
  @operation({
    summary: "Get Mqqs",
  })
  @get()
  static getMqqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mqq",
  })
  @post("{id}")
  static createMqq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
