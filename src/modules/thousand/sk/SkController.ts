import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("sks")
export default class SkController {
  @operation({
    summary: "Get Sks",
  })
  @get()
  static getSks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Sk",
  })
  @post("{id}")
  static createSk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
