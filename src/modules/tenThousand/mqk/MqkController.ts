import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mqks")
export default class MqkController {
  @operation({
    summary: "Get Mqks",
  })
  @get()
  static getMqks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mqk",
  })
  @post("{id}")
  static createMqk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
