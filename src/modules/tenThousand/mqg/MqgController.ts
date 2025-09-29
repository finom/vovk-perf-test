import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mqgs")
export default class MqgController {
  @operation({
    summary: "Get Mqgs",
  })
  @get()
  static getMqgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mqg",
  })
  @post("{id}")
  static createMqg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
