import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mqps")
export default class MqpController {
  @operation({
    summary: "Get Mqps",
  })
  @get()
  static getMqps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mqp",
  })
  @post("{id}")
  static createMqp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
