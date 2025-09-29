import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kxms")
export default class KxmController {
  @operation({
    summary: "Get Kxms",
  })
  @get()
  static getKxms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kxm",
  })
  @post("{id}")
  static createKxm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
