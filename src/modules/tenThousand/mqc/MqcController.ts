import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mqcs")
export default class MqcController {
  @operation({
    summary: "Get Mqcs",
  })
  @get()
  static getMqcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mqc",
  })
  @post("{id}")
  static createMqc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
