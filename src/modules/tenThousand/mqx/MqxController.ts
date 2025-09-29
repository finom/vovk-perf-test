import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mqxes")
export default class MqxController {
  @operation({
    summary: "Get Mqxes",
  })
  @get()
  static getMqxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mqx",
  })
  @post("{id}")
  static createMqx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
