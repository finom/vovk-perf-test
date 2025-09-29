import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mqvs")
export default class MqvController {
  @operation({
    summary: "Get Mqvs",
  })
  @get()
  static getMqvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mqv",
  })
  @post("{id}")
  static createMqv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
