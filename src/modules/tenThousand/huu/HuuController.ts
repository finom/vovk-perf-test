import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("huus")
export default class HuuController {
  @operation({
    summary: "Get Huus",
  })
  @get()
  static getHuus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Huu",
  })
  @post("{id}")
  static createHuu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
