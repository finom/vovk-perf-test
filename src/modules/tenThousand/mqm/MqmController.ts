import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mqms")
export default class MqmController {
  @operation({
    summary: "Get Mqms",
  })
  @get()
  static getMqms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mqm",
  })
  @post("{id}")
  static createMqm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
