import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mqies")
export default class MqyController {
  @operation({
    summary: "Get Mqies",
  })
  @get()
  static getMqies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mqy",
  })
  @post("{id}")
  static createMqy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
