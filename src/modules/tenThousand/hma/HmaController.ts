import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hmas")
export default class HmaController {
  @operation({
    summary: "Get Hmas",
  })
  @get()
  static getHmas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hma",
  })
  @post("{id}")
  static createHma = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
