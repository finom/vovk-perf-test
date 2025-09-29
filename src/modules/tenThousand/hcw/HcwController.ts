import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hcws")
export default class HcwController {
  @operation({
    summary: "Get Hcws",
  })
  @get()
  static getHcws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hcw",
  })
  @post("{id}")
  static createHcw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
