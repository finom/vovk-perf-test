import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mqws")
export default class MqwController {
  @operation({
    summary: "Get Mqws",
  })
  @get()
  static getMqws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mqw",
  })
  @post("{id}")
  static createMqw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
