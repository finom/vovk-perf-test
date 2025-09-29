import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mqts")
export default class MqtController {
  @operation({
    summary: "Get Mqts",
  })
  @get()
  static getMqts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mqt",
  })
  @post("{id}")
  static createMqt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
