import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("amqs")
export default class AmqController {
  @operation({
    summary: "Get Amqs",
  })
  @get()
  static getAmqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Amq",
  })
  @post("{id}")
  static createAmq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
