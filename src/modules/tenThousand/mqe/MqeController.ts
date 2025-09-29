import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mqes")
export default class MqeController {
  @operation({
    summary: "Get Mqes",
  })
  @get()
  static getMqes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mqe",
  })
  @post("{id}")
  static createMqe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
