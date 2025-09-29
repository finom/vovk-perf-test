import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mqas")
export default class MqaController {
  @operation({
    summary: "Get Mqas",
  })
  @get()
  static getMqas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mqa",
  })
  @post("{id}")
  static createMqa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
