import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mqjs")
export default class MqjController {
  @operation({
    summary: "Get Mqjs",
  })
  @get()
  static getMqjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mqj",
  })
  @post("{id}")
  static createMqj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
