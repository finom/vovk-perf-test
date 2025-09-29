import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("abzs")
export default class AbzController {
  @operation({
    summary: "Get Abzs",
  })
  @get()
  static getAbzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Abz",
  })
  @post("{id}")
  static createAbz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
