import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hiks")
export default class HikController {
  @operation({
    summary: "Get Hiks",
  })
  @get()
  static getHiks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hik",
  })
  @post("{id}")
  static createHik = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
