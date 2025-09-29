import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mqfs")
export default class MqfController {
  @operation({
    summary: "Get Mqfs",
  })
  @get()
  static getMqfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mqf",
  })
  @post("{id}")
  static createMqf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
