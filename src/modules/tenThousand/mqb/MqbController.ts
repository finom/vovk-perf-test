import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mqbs")
export default class MqbController {
  @operation({
    summary: "Get Mqbs",
  })
  @get()
  static getMqbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mqb",
  })
  @post("{id}")
  static createMqb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
