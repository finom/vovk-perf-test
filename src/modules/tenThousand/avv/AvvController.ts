import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("avvs")
export default class AvvController {
  @operation({
    summary: "Get Avvs",
  })
  @get()
  static getAvvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Avv",
  })
  @post("{id}")
  static createAvv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
