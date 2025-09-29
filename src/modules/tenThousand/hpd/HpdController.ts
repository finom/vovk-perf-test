import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hpds")
export default class HpdController {
  @operation({
    summary: "Get Hpds",
  })
  @get()
  static getHpds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hpd",
  })
  @post("{id}")
  static createHpd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
