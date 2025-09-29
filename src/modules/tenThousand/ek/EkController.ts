import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eks")
export default class EkController {
  @operation({
    summary: "Get Eks",
  })
  @get()
  static getEks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ek",
  })
  @post("{id}")
  static createEk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
