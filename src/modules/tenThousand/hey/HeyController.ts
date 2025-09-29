import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("heys")
export default class HeyController {
  @operation({
    summary: "Get Heys",
  })
  @get()
  static getHeys = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hey",
  })
  @post("{id}")
  static createHey = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
