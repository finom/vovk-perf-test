import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mqos")
export default class MqoController {
  @operation({
    summary: "Get Mqos",
  })
  @get()
  static getMqos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mqo",
  })
  @post("{id}")
  static createMqo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
