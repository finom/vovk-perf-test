import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kxrs")
export default class KxrController {
  @operation({
    summary: "Get Kxrs",
  })
  @get()
  static getKxrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kxr",
  })
  @post("{id}")
  static createKxr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
