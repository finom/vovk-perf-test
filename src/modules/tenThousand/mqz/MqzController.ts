import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mqzs")
export default class MqzController {
  @operation({
    summary: "Get Mqzs",
  })
  @get()
  static getMqzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mqz",
  })
  @post("{id}")
  static createMqz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
