import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hwos")
export default class HwoController {
  @operation({
    summary: "Get Hwos",
  })
  @get()
  static getHwos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hwo",
  })
  @post("{id}")
  static createHwo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
