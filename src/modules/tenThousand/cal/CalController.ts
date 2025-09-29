import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cals")
export default class CalController {
  @operation({
    summary: "Get Cals",
  })
  @get()
  static getCals = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cal",
  })
  @post("{id}")
  static createCal = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
