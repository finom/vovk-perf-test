import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lmzs")
export default class LmzController {
  @operation({
    summary: "Get Lmzs",
  })
  @get()
  static getLmzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lmz",
  })
  @post("{id}")
  static createLmz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
