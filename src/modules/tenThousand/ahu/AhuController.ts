import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ahus")
export default class AhuController {
  @operation({
    summary: "Get Ahus",
  })
  @get()
  static getAhus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ahu",
  })
  @post("{id}")
  static createAhu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
