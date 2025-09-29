import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mqs")
export default class MqController {
  @operation({
    summary: "Get Mqs",
  })
  @get()
  static getMqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mq",
  })
  @post("{id}")
  static createMq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
