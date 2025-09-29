import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hoks")
export default class HokController {
  @operation({
    summary: "Get Hoks",
  })
  @get()
  static getHoks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hok",
  })
  @post("{id}")
  static createHok = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
