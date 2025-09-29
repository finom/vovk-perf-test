import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("boqs")
export default class BoqController {
  @operation({
    summary: "Get Boqs",
  })
  @get()
  static getBoqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Boq",
  })
  @post("{id}")
  static createBoq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
