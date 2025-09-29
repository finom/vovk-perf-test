import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("abus")
export default class AbuController {
  @operation({
    summary: "Get Abus",
  })
  @get()
  static getAbus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Abu",
  })
  @post("{id}")
  static createAbu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
