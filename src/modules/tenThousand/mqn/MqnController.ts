import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mqns")
export default class MqnController {
  @operation({
    summary: "Get Mqns",
  })
  @get()
  static getMqns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mqn",
  })
  @post("{id}")
  static createMqn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
