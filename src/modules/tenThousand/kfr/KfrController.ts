import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kfrs")
export default class KfrController {
  @operation({
    summary: "Get Kfrs",
  })
  @get()
  static getKfrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kfr",
  })
  @post("{id}")
  static createKfr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
