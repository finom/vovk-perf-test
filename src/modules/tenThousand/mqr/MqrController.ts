import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mqrs")
export default class MqrController {
  @operation({
    summary: "Get Mqrs",
  })
  @get()
  static getMqrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mqr",
  })
  @post("{id}")
  static createMqr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
