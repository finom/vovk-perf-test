import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("emas")
export default class EmaController {
  @operation({
    summary: "Get Emas",
  })
  @get()
  static getEmas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ema",
  })
  @post("{id}")
  static createEma = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
