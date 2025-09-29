import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hees")
export default class HeeController {
  @operation({
    summary: "Get Hees",
  })
  @get()
  static getHees = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hee",
  })
  @post("{id}")
  static createHee = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
