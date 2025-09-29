import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mqis")
export default class MqiController {
  @operation({
    summary: "Get Mqis",
  })
  @get()
  static getMqis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mqi",
  })
  @post("{id}")
  static createMqi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
